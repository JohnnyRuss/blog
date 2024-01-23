import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { ARTICLES_PER_PAGE } from "@/config/config";
import { createSelectors, getStatus } from "./helpers";

import {
  ArticleStateT,
  ArticleStoreT,
} from "@/interface/store/article.store.types";

const initialState: ArticleStateT = {
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),
  readStatus: getStatus("IDLE"),
  saveStatus: getStatus("IDLE"),

  lists: [],

  hasMore: false,
  currentPage: 0,
  articles: [],

  article: {
    _id: "",
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
    immer((set) => ({
      ...initialState,

      async create(args) {
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

          console.log(args);

          set(() => ({
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

          // const {
          //   data: { data, currentPage, hasMore },
          // }: AxiosResponse<GetProductsResponseT> = await axiosPrivateQuery.get(
          //   `/dashboard/products?${queryStr}`
          // );

          set(() => ({
            // hasMore,
            // currentPage,
            // products: data,
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

          // const {
          //   data: { data, currentPage, hasMore },
          // }: AxiosResponse<GetProductsResponseT> = await axiosPrivateQuery.get(
          //   `/dashboard/products?${queryStr}`
          // );

          // set(() => ({
          //   hasMore,
          //   currentPage,
          //   products: [...getState().products, ...data],
          // }));
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
