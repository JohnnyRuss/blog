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

const initialState: ListStateT = {
  lists: [],
  listsStatus: getStatus("IDLE"),
  listsToAdd: [],
  listsToAddStatus: getStatus("IDLE"),
  createListStatus: getStatus("IDLE"),
};

const useListStore = create<ListStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

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
          set(() => ({ listsStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post(`/lists/${args.listId}`, {
            articleId: args.articleId,
          });

          set((state) => {
            produce(state, (draft) => {
              const list = draft.listsToAdd.find(
                (list) => list._id === args.listId
              );

              list.articles.push(args.articleId);
            });

            return {
              listsStatus: getStatus("SUCCESS"),
            };
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
              privacy: "",
            });

          set((state) => {
            produce(state, (draft) => {
              draft.listsToAdd.push(data);
            });

            return {
              createListStatus: getStatus("SUCCESS"),
            };
          });
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createListStatus: getStatus("FAIL", message) }));
        }
      },
    })),
    { name: "list" }
  )
);

export default createSelectors(useListStore);
