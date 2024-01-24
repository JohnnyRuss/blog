import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { axiosPrivateQuery } from "@/services/axios";
import { generateQueryableString } from "@/utils";
import { ARTICLES_PER_PAGE } from "@/config/config";
import { createSelectors, getStatus } from "./helpers";

import {
  ArticleStateT,
  ArticleStoreT,
} from "@/interface/store/article.store.types";
import {
  ArticleT,
  GetAllArticlesResponseT,
} from "@/interface/db/article.types";
import { CategoryT } from "@/interface/db/category.types";

const initialState: ArticleStateT = {
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),
  readStatus: getStatus("IDLE"),
  saveStatus: getStatus("IDLE"),

  lists: [],

  categorySuggestions: [],

  hasMore: false,
  currentPage: 0,
  articles: [],

  article: {
    _id: "",
    slug: "",
    author: {
      _id: "",
      avatar: "",
      username: "",
    },
    body: "",
    categories: [],
    title: "",
    likes: [],
    views: [],
    createdAt: "",
    updatedAt: "",
  },
};

const useArticleStore = create<ArticleStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async getCategorySuggestions() {
        const { data }: AxiosResponse<Array<CategoryT>> =
          await axiosPrivateQuery.get("/categories");

        set(() => ({ categorySuggestions: data }));
      },

      async create(args) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          const data = {
            title: args.title,
            categories: args.categories.map((category) => ({
              ...category,
              query: generateQueryableString(category.query),
            })),
            body: args.body,
          };

          await axiosPrivateQuery.post("/articles", data);

          set(() => ({
            createStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async update(args) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          console.log(args);

          set(() => ({
            createStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async delete(args) {
        try {
          set(() => ({ deleteStatus: getStatus("PENDING") }));

          console.log(args);

          set(() => ({
            deleteStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ deleteStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async get(args) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ArticleT> = await axiosPrivateQuery.get(
            `/articles/${args.slug}`
          );

          set(() => ({
            article: data,
            readStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpArticle() {},

      async getAll(args) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          console.log(args);

          const queryStrings = [
            args.query.replace("?", ""),
            `page=${1}&limit=${ARTICLES_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(`/articles?${queryStr}`);

          set(() => ({
            hasMore,
            currentPage,
            articles: data,
            readStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getAllPaginated(args) {
        try {
          console.log(args);

          const queryStrings = [
            args.query.replace("?", ""),
            `page=${args.page}&limit=${ARTICLES_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(`/articles?${queryStr}`);

          set(() => ({
            hasMore,
            currentPage,
            articles: [...get().articles, ...data],
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpArticles() {},

      async like(args) {
        console.log(args);
      },

      async getLists() {
        try {
          set(() => ({ saveStatus: getStatus("PENDING") }));
          set(() => ({
            saveStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ saveStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async save(args) {
        try {
          set(() => ({ saveStatus: getStatus("PENDING") }));
          console.log(args);
          set(() => ({
            saveStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ saveStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },
    }))
  )
);

export default createSelectors(useArticleStore);
