import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

import { logger } from "@/utils";
import { userStore } from "@/store";
import { RouterHistory } from "@/config/config";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { ARTICLES_PER_PAGE } from "@/config/config";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";

import {
  ArticleShortT,
  GetAllArticlesResponseT,
} from "@/interface/db/article.types";
import { ListT, ListShortT, ListArticlesT } from "@/interface/db/list.types";
import { ListStateT, ListStoreT } from "@/interface/store/list.store.types";

const initialState: ListStateT = {
  // ========== CREATE ==========
  createListStatus: getStatus("IDLE"),

  // ========== DELETE ==========
  deleteListStatus: getStatus("IDLE"),

  // ========== Add To List ==========
  listsToAdd: [],
  listsToAddStatus: getStatus("IDLE"),

  // ========== Lists ==========
  lists: [],
  listsStatus: getStatus("IDLE"),

  // ========== List Details ==========
  listDetails: {
    _id: "",
    author: {
      _id: "",
      avatar: "",
      email: "",
      fullname: "",
      username: "",
    },
    createdAt: "",
    description: "",
    privacy: "",
    title: "",
  },
  listDetailsStatus: getStatus("IDLE"),

  // ========== List Articles ==========
  hasMore: false,
  currentPage: 0,
  listArticles: [],
  listArticlesStatus: getStatus("IDLE"),

  // ========== Saved Articles ==========
  savedStatus: getStatus("IDLE"),
  savedArticles: [],
  savedArticlesIds: [],

  // ========== Saved Lists ==========
  savedLists: [],
  savedListsStatus: getStatus("IDLE"),
  saveListStatus: getStatus("IDLE"),
  savedListsIds: [],
};

const useListStore = create<ListStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      // ========== CREATE ==========
      async createList(args) {
        try {
          set(() => ({ createListStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ListShortT> =
            await axiosPrivateQuery.post(`/lists`, {
              title: args.title,
              description: args.description,
              privacy: args.privacy,
            });

          set((state) => {
            return {
              ...produce(state, (draft) => {
                draft.listsToAdd.push(data);
              }),
              createListStatus: getStatus("SUCCESS"),
            };
          });
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createListStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async updateList(args) {
        try {
          set(() => ({ createListStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ListShortT> =
            await axiosPrivateQuery.put(`/lists/${args.listId}`, args.data);

          set((state) => {
            return {
              ...produce(state, (draft) => {
                if (args.listId === draft.listDetails._id) {
                  draft.listDetails.title = data.title;
                  draft.listDetails.description = data.description;
                  draft.listDetails.privacy = data.privacy;
                }
              }),

              createListStatus: getStatus("SUCCESS"),
            };
          });
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createListStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      // ========== DELETE ==========
      async deleteList(args) {
        try {
          set(() => ({ deleteListStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete(`/lists/${args.listId}`);

          const { username } = userStore.getState().userDetails;

          RouterHistory.navigate(DYNAMIC_ROUTES.profile_lists(username), {
            replace: true,
          });

          set(() => ({ deleteListStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ deleteListStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      // ========== Add To List ==========
      async getListsToAdd() {
        try {
          set(() => ({ listsToAddStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ListShortT>> =
            await axiosPrivateQuery.get(`/lists`);

          set(() => ({
            listsToAdd: data,
            listsToAddStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listsToAddStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async addToList(args) {
        try {
          const { data }: AxiosResponse<ListArticlesT> =
            await axiosPrivateQuery.post(`/lists/${args.listId}`, {
              articleId: args.articleId,
            });

          set((state) => {
            return produce(state, (draft) => {
              // update listsToAdd
              const listToAdd = draft.listsToAdd.find(
                (list) => list._id === args.listId
              );

              listToAdd.articles = listToAdd.articles.some(
                (article) => article.article === args.articleId
              )
                ? listToAdd.articles.filter(
                    (article) => article.article !== args.articleId
                  )
                : [
                    ...listToAdd.articles,
                    { savedAt: new Date().toString(), article: args.articleId },
                  ];

              // update savedArticlesIds
              draft.savedArticlesIds = draft.savedArticlesIds.some(
                (articleId) => articleId === args.articleId
              )
                ? draft.savedArticlesIds.filter(
                    (articleId) => articleId !== args.articleId
                  )
                : [...draft.savedArticlesIds, args.articleId];

              //update lists

              if (draft.lists.length <= 0) return;

              const list = draft.lists.find((list) => list._id === args.listId);

              if (!list) return;

              list.articles = list.articles.some(
                (article) => article.article._id === args.articleId
              )
                ? list.articles.filter(
                    (article) => article.article._id !== args.articleId
                  )
                : [...data];
            });
          });
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpListsToAdd() {
        set(() => ({
          listsToAdd: initialState.listsToAdd,
          listsToAddStatus: initialState.listsToAddStatus,
        }));
      },

      // ========== Lists ==========
      async getLists(args) {
        try {
          set(() => ({ listsStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ListT>> =
            await axiosPrivateQuery.get(
              `/lists/user/${args.userId}${
                args.limit ? `?limit=${args.limit}` : ""
              }`
            );

          set(() => ({ lists: data, listsStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpLists() {
        set(() => ({
          lists: initialState.lists,
          listsStatus: initialState.listsStatus,
        }));
      },

      // ========== List Details ==========
      async getListDetails(listId) {
        try {
          set(() => ({ listDetailsStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Omit<ListT, "articles">> =
            await axiosPrivateQuery.get(`/lists/${listId}/details`);

          set(() => ({
            listDetails: data,
            listDetailsStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listDetailsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpListDetails() {
        set(() => ({
          listDetails: initialState.listDetails,
          listDetailsStatus: initialState.listDetailsStatus,
        }));
      },

      // ========== List Articles ==========
      async getListArticles(listId) {
        try {
          set(() => ({ listArticlesStatus: getStatus("PENDING") }));

          const {
            data: { currentPage, data, hasMore },
          }: AxiosResponse<GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(
              `/lists/${listId}/articles?page=1&limit=${ARTICLES_PER_PAGE}`
            );

          set(() => ({
            hasMore,
            listArticles: data,
            currentPage,
            listArticlesStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listArticlesStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getPaginatedListArticles(args) {
        try {
          const {
            data: { currentPage, data, hasMore },
          }: AxiosResponse<GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(
              `/lists/${args.listId}/articles?page=${args.page}&limit=${ARTICLES_PER_PAGE}`
            );

          set(() => ({
            hasMore,
            currentPage,
            listArticles: [...get().listArticles, ...data],
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listArticlesStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpListArticles() {
        set(() => ({
          listArticles: initialState.listArticles,
          listArticlesStatus: initialState.listArticlesStatus,
        }));
      },

      // ========== Saved Articles ==========
      async getRecentlySavedArticles() {
        try {
          set(() => ({ savedStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ArticleShortT>> =
            await axiosPrivateQuery.get(`/lists/user/saved`);

          set(() => ({
            savedArticles: data,
            savedStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ savedStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpSavedArticles() {
        set(() => ({
          savedArticles: initialState.savedArticles,
          savedStatus: initialState.savedStatus,
        }));
      },

      async getSavedArticlesIds() {
        try {
          const { data }: AxiosResponse<Array<string>> =
            await axiosPrivateQuery("/lists/saved/articles");

          set(() => ({ savedArticlesIds: data }));
        } catch (error) {
          logger(error);
        }
      },

      cleanUpSavedArticlesIds() {
        set(() => ({ savedArticlesIds: initialState.savedArticlesIds }));
      },

      // ========== Saved Lists ==========
      async getSavedListsIds() {
        try {
          set(() => ({ savedStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<string>> =
            await axiosPrivateQuery.get(`/trace/lists/ids`);

          set(() => ({
            savedListsIds: data,
            savedStatus: getStatus("SUCCESS"),
          }));
        } catch (error) {
          logger(error);
        }
      },

      async getSavedLists(args) {
        try {
          set(() => ({ savedListsStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ListT>> = await axiosPrivateQuery(
            `/trace/lists/user/${args.userId}`
          );

          set(() => ({
            savedListsStatus: getStatus("SUCCESS"),
            savedLists: data,
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ savedListsStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async saveList(args) {
        try {
          set(() => ({ saveListStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post(`/trace/lists/${args.listId}`);

          set(() => ({
            savedListsIds: Array.from(
              new Set([...get().savedListsIds, args.listId])
            ),
            saveListStatus: getStatus("SUCCESS"),
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ saveListStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async removeList(args) {
        try {
          set(() => ({ saveListStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete(`/trace/lists/${args.listId}`);

          set(() => ({
            savedListsIds: get().savedListsIds.filter(
              (id) => id !== args.listId
            ),
            saveListStatus: getStatus("SUCCESS"),
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ saveListStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },
    })),
    { name: "list" }
  )
);

export default createSelectors(useListStore);
