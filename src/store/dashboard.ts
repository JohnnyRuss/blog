import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

import {
  DashboardStateT,
  DashboardStoreT,
} from "@/interface/store/dashboard.store.types";
import { logger } from "@/utils";
import { getStatus, createSelectors } from "./helpers";

import { CategoryT } from "@/interface/db/category.types";
import { ArticleShortT } from "@/interface/db/article.types";
import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "@/services/axios";

const initialState: DashboardStateT = {
  articles: [],
  articlesStatus: getStatus("IDLE"),
  categories: [],
  categoriesStatus: getStatus("IDLE"),
};

const useDashboardStore = create<DashboardStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async getCategories() {
        try {
          set(() => ({ categoriesStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<CategoryT>> =
            await axiosPrivateQuery.get("/categories");

          set(() => ({
            categories: data,
            categoriesStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ categoriesStatus: getStatus("FAIL", message) }));
        }
      },

      async uploadCategoryThumbnail(args) {
        try {
          const {
            data: { url },
          }: AxiosResponse<{ url: string }> =
            await axiosPrivateFormDataQuery.post(
              `/dashboard/categories/${args.categoryId}/thumbnail`,
              { thumbnail: args.thumbnail }
            );

          set((state) =>
            produce(state, (draft) => {
              const category = draft.categories.find(
                (c) => c._id === args.categoryId
              );

              if (category) category.thumbnail = url;
            })
          );
        } catch (error: any) {
          logger(error);
          throw error;
        }
      },

      cleanUpCategories() {
        set(() => ({
          categoriesStatus: initialState.categoriesStatus,
          categories: initialState.categories,
        }));
      },

      async getArticles() {
        try {
          set(() => ({ articlesStatus: getStatus("PENDING") }));

          const {
            data: { data },
          }: AxiosResponse<{ data: Array<ArticleShortT> }> =
            await axiosPrivateQuery.get("/articles");

          set(() => ({
            articles: data,
            articlesStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ articlesStatus: getStatus("FAIL", message) }));
        }
      },

      cleanUArticles() {
        set(() => ({
          articlesStatus: initialState.categoriesStatus,
          articles: initialState.categories,
        }));
      },

      async pickArticle(args) {
        try {
          await axiosPrivateQuery.post(
            `/dashboard/articles/${args.articleId}/pick`,
            { picked: args.picked }
          );

          set((state) =>
            produce(state, (draft) => {
              const pickedArticle = draft.articles.find(
                (a) => a._id === args.articleId
              );

              if (pickedArticle) pickedArticle.picked = args.picked;
            })
          );
        } catch (error) {
          logger(error);
        }
      },
    })),
    { name: "dashboard" }
  )
);

export default createSelectors(useDashboardStore);
