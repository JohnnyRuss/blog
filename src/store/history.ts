import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

import { logger } from "@/utils";
import { ARTICLES_PER_PAGE } from "@/config/config";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";

import {
  HistoryStateT,
  HistoryStoreT,
} from "@/interface/store/history.store.types";
import {
  GetUserHistoryResponseT,
  HistoryGroupT,
} from "@/interface/db/userTrace.types";

const initialState: HistoryStateT = {
  status: getStatus("IDLE"),
  currentPage: 0,
  hasMore: false,
  history: [],
  clearStatus: getStatus("IDLE"),
};

const useHistoryStore = create<HistoryStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async getHistory(limit) {
        try {
          set(() => ({ status: getStatus("PENDING") }));

          const {
            data: { currentPage, data, hasMore },
          }: AxiosResponse<GetUserHistoryResponseT> =
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
          throw error;
        }
      },

      async getHistoryPaginated(args) {
        try {
          const {
            data: { currentPage, data, hasMore },
          }: AxiosResponse<GetUserHistoryResponseT> =
            await axiosPrivateQuery.get(
              `/trace/history?page=${args.page}&limit=${ARTICLES_PER_PAGE}`
            );

          set((state) =>
            produce(state, (draft) => {
              const history = JSON.parse(JSON.stringify(draft.history));

              const checkGroupDuplication = (group: HistoryGroupT): number =>
                history.findIndex(
                  ({ group: existingGroup }) =>
                    existingGroup.year === group.year &&
                    existingGroup.month === group.month &&
                    ((existingGroup.day && existingGroup.day === group.day) ||
                      !existingGroup.day)
                );

              data.forEach(({ group, articles }) => {
                const candidateExistingGroupIndex =
                  checkGroupDuplication(group);

                if (candidateExistingGroupIndex >= 0)
                  articles.forEach((article) =>
                    history[candidateExistingGroupIndex].articles.push(article)
                  );
                else history.push({ group, articles });
              });

              draft.hasMore = hasMore;
              draft.currentPage = currentPage;
              draft.history = history;
            })
          );
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpHistory() {
        set(() => ({
          status: initialState.status,
          history: initialState.history,
        }));
      },

      async clearHistory() {
        try {
          set(() => ({ clearStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete("/trace/history");

          set(() => ({ history: [], clearStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ clearStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },
    })),
    { name: "history" }
  )
);

export default createSelectors(useHistoryStore);
