import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { NODE_MODE } from "@/config/env";
import { axiosPrivateQuery } from "@/services/axios";
import { generateQueryableString } from "@/utils";
import { ARTICLES_PER_PAGE } from "@/config/config";
import { createSelectors, getStatus } from "./helpers";

import {
  ArticleStateT,
  ArticleStoreT,
} from "@/interface/store/article.store.types";
import {
  ArticleShortT,
  ArticleT,
  GetAllArticlesResponseT,
} from "@/interface/db/article.types";
import { CategoryT } from "@/interface/db/category.types";

const initialState: ArticleStateT = {
  categorySuggestions: [],
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),

  // Articles
  hasMore: false,
  currentPage: 0,
  articles: [],
  readAllStatus: getStatus("IDLE"),

  // Article
  readStatus: getStatus("IDLE"),
  article: {
    _id: "",
    slug: "",
    author: {
      _id: "",
      avatar: "",
      username: "",
      fullname: "",
    },
    body: "",
    categories: [],
    title: "",
    likes: [],
    views: 0,
    createdAt: "",
    updatedAt: "",
  },

  // Top Article
  topArticleStatus: getStatus("IDLE"),
  topArticle: {
    _id: "",
    author: {
      _id: "",
      avatar: "",
      fullname: "",
      username: "",
    },
    body: "",
    categories: [],
    createdAt: "",
    slug: "",
    title: "",
  },

  // Related Articles
  relatedStatus: getStatus("IDLE"),
  relatedArticles: [],

  // Popular Articles
  popularStatus: getStatus("IDLE"),
  popularArticles: [],

  // EditorPick Articles
  editorPickedStatus: getStatus("IDLE"),
  editorPickedArticles: [],

  // Recent Articles
  recentStatus: getStatus("IDLE"),
  recentArticles: [],

  // Others
  lists: [],
  saveStatus: getStatus("IDLE"),
};

const useArticleStore = create<ArticleStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      // CUD
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

      // Articles
      async getAll(args) {
        try {
          set(() => ({ readAllStatus: getStatus("PENDING") }));

          const { currentPage, hasMore, data } = await getArticlesQuery({
            page: 1,
            queryStr: args.query,
            limit: ARTICLES_PER_PAGE,
          });

          set(() => ({
            hasMore,
            currentPage,
            articles: data,
            readAllStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ readAllStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getAllPaginated(args) {
        try {
          const { currentPage, hasMore, data } = await getArticlesQuery({
            page: args.page,
            queryStr: args.query,
            limit: ARTICLES_PER_PAGE,
          });

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

      cleanUpArticles() {
        set(() => ({
          articles: initialState.articles,
          readAllStatus: initialState.readAllStatus,
        }));
      },

      // Article
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

      cleanUpArticle() {
        set(() => ({
          article: initialState.article,
          readStatus: initialState.readStatus,
        }));
      },

      // Top Article
      async getTopArticle() {
        try {
          set(() => ({ topArticleStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ArticleShortT> =
            await axiosPrivateQuery.get("/articles/top");

          set(() => ({
            topArticle: data,
            topArticleStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ topArticleStatus: getStatus("FAIL", message) }));
          NODE_MODE === "DEV" && console.log(error);
        }
      },

      cleanUpTopArticle() {
        set(() => ({
          topArticle: initialState.topArticle,
          topArticleStatus: initialState.topArticleStatus,
        }));
      },

      // Related Articles
      async getRelatedArticles() {
        try {
          set(() => ({ relatedStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "sort=-views",
          });

          set(() => ({
            relatedArticles: data,
            relatedStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ relatedStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpRelatedArticles() {
        set(() => ({
          relatedArticles: initialState.relatedArticles,
          relatedStatus: initialState.relatedStatus,
        }));
      },

      // Popular Articles
      async getPopularArticles() {
        try {
          set(() => ({ popularStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "sort=-views&userbased=1",
          });

          set(() => ({
            popularArticles: data,
            popularStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ popularStatus: getStatus("FAIL", message) }));
          NODE_MODE === "DEV" && console.log(error);
        }
      },

      cleanUpPopularArticles() {
        set(() => ({
          popularArticles: initialState.popularArticles,
          popularStatus: initialState.popularStatus,
        }));
      },

      // Editor Picked Articles
      async getEditorPickedArticles() {
        try {
          set(() => ({ editorPickedStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "picked=1&userbased=1",
          });

          set(() => ({
            editorPickedArticles: data,
            editorPickedStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ editorPickedStatus: getStatus("FAIL", message) }));
          NODE_MODE === "DEV" && console.log(error);
        }
      },

      cleanUpEditorPickedArticles() {
        set(() => ({
          editorPickedArticles: initialState.editorPickedArticles,
          editorPickedStatus: initialState.editorPickedStatus,
        }));
      },

      // Recent Articles
      async getRecentArticles() {
        try {
          set(() => ({ recentStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "sort=-createdAt&userbased=1",
          });

          set(() => ({
            recentArticles: data,
            recentStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ recentStatus: getStatus("FAIL", message) }));
          NODE_MODE === "DEV" && console.log(error);
        }
      },

      cleanUpRecentArticles() {
        set(() => ({
          recentArticles: initialState.recentArticles,
          recentStatus: initialState.recentStatus,
        }));
      },

      // Others
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
    })),
    { name: "articles" }
  )
);

export default createSelectors(useArticleStore);

async function getArticlesQuery(params: {
  queryStr: string;
  page: number;
  limit: number;
}): Promise<GetAllArticlesResponseT> {
  const queryStrings = [
    params.queryStr.replace("?", ""),
    `page=${params.page}&limit=${params.limit}`,
  ];

  const queryStr = queryStrings.join(params.queryStr ? "&" : "");

  const { data }: AxiosResponse<GetAllArticlesResponseT> =
    await axiosPrivateQuery.get(`/articles?${queryStr}`);

  return data;
}
