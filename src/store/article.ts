import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

import { ARTICLES_PER_PAGE } from "@/config/config";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";
import { generateQueryableString, logger } from "@/utils";
import { authStore } from "@/store";

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
  // ========== CUD ==========
  categorySuggestions: [],
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),

  // ========== Articles ==========
  hasMore: false,
  currentPage: 0,
  articles: [],
  readAllStatus: getStatus("IDLE"),

  // ========== Article ==========
  readStatus: getStatus("IDLE"),
  article: {
    _id: "",
    slug: "",
    author: {
      _id: "",
      avatar: "",
      username: "",
      fullname: "",
      email: "",
    },
    body: "",
    categories: [],
    title: "",
    likes: [],
    views: 0,
    createdAt: "",
    updatedAt: "",
  },

  // ========== Top Article ==========
  topArticleStatus: getStatus("IDLE"),
  topArticle: {
    _id: "",
    author: {
      _id: "",
      avatar: "",
      fullname: "",
      username: "",
      email: "",
    },
    body: "",
    categories: [],
    createdAt: "",
    slug: "",
    title: "",
    picked: false,
  },

  // ========== Related Articles ==========
  relatedStatus: getStatus("IDLE"),
  relatedArticles: [],

  // ========== Popular Articles ==========
  popularStatus: getStatus("IDLE"),
  popularArticles: [],

  // ========== Editor Picked Articles ==========
  editorPickedStatus: getStatus("IDLE"),
  editorPickedArticles: [],

  // ========== Recent Articles ==========
  recentStatus: getStatus("IDLE"),
  recentArticles: [],

  // ========== Others ==========
  lists: [],
};

const useArticleStore = create<ArticleStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      // ========== CUD ==========
      async getCategorySuggestions() {
        try {
          const { data }: AxiosResponse<Array<CategoryT>> =
            await axiosPrivateQuery.get("/categories");

          set(() => ({ categorySuggestions: data }));
        } catch (error) {
          logger(error);
          throw error;
        }
      },

      cleanUpSuggestions() {
        set(() => ({ categorySuggestions: initialState.categorySuggestions }));
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
          const message = logger(error);
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
          const message = logger(error);
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
          const message = logger(error);
          set(() => ({ deleteStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      // ========== Articles ==========
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
          const message = logger(error);
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
          const message = logger(error);
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

      // ========== Article ==========
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
          const message = logger(error);
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

      // ========== Top Article ==========
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
          const message = logger(error);
          set(() => ({ topArticleStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpTopArticle() {
        set(() => ({
          topArticle: initialState.topArticle,
          topArticleStatus: initialState.topArticleStatus,
        }));
      },

      // ========== Related Articles ==========
      async getRelatedArticles(args) {
        try {
          set(() => ({ relatedStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ArticleShortT>> =
            await axiosPrivateQuery.get(`/articles/related/${args.slug}`);

          set(() => ({
            relatedArticles: data,
            relatedStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
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

      // ========== Popular Articles ==========
      async getPopularArticles() {
        try {
          set(() => ({ popularStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "sort=-common,-views&userbased=1",
          });

          set(() => ({
            popularArticles: data,
            popularStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ popularStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpPopularArticles() {
        set(() => ({
          popularArticles: initialState.popularArticles,
          popularStatus: initialState.popularStatus,
        }));
      },

      // ========== Editor Picked Articles ==========
      async getEditorPickedArticles() {
        try {
          set(() => ({ editorPickedStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "picked=1&userbased=1&sort=-common",
          });

          set(() => ({
            editorPickedArticles: data,
            editorPickedStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ editorPickedStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpEditorPickedArticles() {
        set(() => ({
          editorPickedArticles: initialState.editorPickedArticles,
          editorPickedStatus: initialState.editorPickedStatus,
        }));
      },

      // ========== Recent Articles ==========
      async getRecentArticles() {
        try {
          set(() => ({ recentStatus: getStatus("PENDING") }));

          const { data } = await getArticlesQuery({
            page: 1,
            limit: 4,
            queryStr: "sort=-createdAt,-common&userbased=1",
          });

          set(() => ({
            recentArticles: data,
            recentStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ recentStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpRecentArticles() {
        set(() => ({
          recentArticles: initialState.recentArticles,
          recentStatus: initialState.recentStatus,
        }));
      },

      // ========== Others ==========
      async like(args) {
        try {
          await axiosPrivateQuery.post(`/articles/reaction/${args.articleId}`);

          const authenticatedUser = authStore.getState().user;

          const updateLikes = (likes: Array<string>) =>
            likes.includes(authenticatedUser._id)
              ? likes.filter((like) => like !== authenticatedUser._id)
              : [...likes, authenticatedUser._id];

          set((state) =>
            produce(state, (draft) => {
              const candidateArticle = draft.articles.find(
                (article) => article._id === args.articleId
              );

              const isActiveArticle = draft.article._id === args.articleId;

              if (isActiveArticle)
                draft.article.likes = updateLikes(draft.article.likes);

              if (!candidateArticle) return;

              candidateArticle.likes = updateLikes(candidateArticle.likes);
            })
          );
        } catch (error) {
          const message = logger(error);
          throw new Error(message);
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
  try {
    const queryStrings = [
      params.queryStr.replace("?", ""),
      `page=${params.page}&limit=${params.limit}`,
    ];

    const queryStr = queryStrings.join(params.queryStr ? "&" : "");

    const { data }: AxiosResponse<GetAllArticlesResponseT> =
      await axiosPrivateQuery.get(`/articles?${queryStr}`);

    return data;
  } catch (error: any) {
    const message = logger(error);
    throw new Error(message);
  }
}
