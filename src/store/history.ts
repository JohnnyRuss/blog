import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { ARTICLES_PER_PAGE } from "@/config/config";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";

import {
  HistoryStateT,
  HistoryStoreT,
} from "@/interface/store/history.store.types";
import { GetAllArticlesResponseT } from "@/interface/db/article.types";

const initialState: HistoryStateT = {
  status: getStatus("IDLE"),
  currentPage: 0,
  hasMore: false,
  history: [],
  clearStatus: getStatus("IDLE"),
};

const useHistoryStore = create<HistoryStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async getHistory(limit) {
        try {
          set(() => ({ status: getStatus("PENDING") }));

          const {
            data: { currentPage, data, hasMore },
          }: AxiosResponse<GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(
              `/trace/history?page=1&limit=${limit ? limit : ARTICLES_PER_PAGE}`
            );

          set(() => ({
            hasMore,
            currentPage,
            history: data,
            status: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ status: getStatus("FAIL", message) }));
        }
      },

      async getHistoryPaginated(args) {
        try {
          const {
            data: { currentPage, data, hasMore },
          }: AxiosResponse<GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(
              `/trace/history?page=${args.page}&limit=${ARTICLES_PER_PAGE}`
            );

          set(() => ({
            hasMore,
            currentPage,
            history: [...get().history, ...data],
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpHistory() {},

      async clearHistory() {
        try {
          set(() => ({ clearStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete("");

          set(() => ({ history: [], clearStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ clearStatus: getStatus("FAIL", message) }));
        }
      },
    })),
    { name: "history" }
  )
);

export default createSelectors(useHistoryStore);
