import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";

import { ListT, ListShortT } from "@/interface/db/list.types";
import { ListStateT, ListStoreT } from "@/interface/store/list.store.types";
import { logger } from "@/utils";
import { ArticleShortT } from "@/interface/db/article.types";

const initialState: ListStateT = {
  // Lists
  lists: [],
  listsStatus: getStatus("IDLE"),
  // Add To List
  listsToAdd: [],
  listsToAddStatus: getStatus("IDLE"),
  createListStatus: getStatus("IDLE"),
  // Saved Articles
  savedStatus: getStatus("IDLE"),
  savedArticles: [],
};

const useListStore = create<ListStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,
      // Add To List
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
        }
      },

      async addToList(args) {
        try {
          await axiosPrivateQuery.post(`/lists/${args.listId}`, {
            articleId: args.articleId,
          });

          set((state) => {
            return produce(state, (draft) => {
              const list = draft.listsToAdd.find(
                (list) => list._id === args.listId
              );

              list.articles = list.articles.some(
                (article) => article.article === args.articleId
              )
                ? list.articles.filter(
                    (article) => article.article !== args.articleId
                  )
                : [
                    ...list.articles,
                    { savedAt: new Date().toString(), article: args.articleId },
                  ];
            });
          });
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listsStatus: getStatus("FAIL", message) }));
        }
      },

      cleanUpListsToAdd() {
        set(() => ({
          listsToAdd: initialState.listsToAdd,
          listsToAddStatus: initialState.listsToAddStatus,
        }));
      },

      // Lists
      async getLists(args) {
        try {
          set(() => ({ listsStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ListT>> =
            await axiosPrivateQuery.get(`/lists/user/${args.userId}`);

          set(() => ({ lists: data, listsStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ listsStatus: getStatus("FAIL", message) }));
        }
      },

      cleanUpLists() {
        set(() => ({
          lists: initialState.lists,
          listsStatus: initialState.listsStatus,
        }));
      },

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

      //  Saved Articles
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
        }
      },

      cleanUpSavedArticles() {
        set(() => ({
          savedArticles: initialState.savedArticles,
          savedStatus: initialState.savedStatus,
        }));
      },
    })),
    { name: "list" }
  )
);

export default createSelectors(useListStore);
