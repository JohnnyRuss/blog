/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { historyStore } from "@/store";
import { logger } from "@/utils";

export default function useGetUserHistoryQuery(sizeOnMount?: number) {
  const get = historyStore.use.getHistory();
  const getPaginated = historyStore.use.getHistoryPaginated();
  const cleanUpHistory = historyStore.use.cleanUpHistory();

  const data = historyStore.use.history();
  const status = historyStore.use.status();

  const total = data.length;
  const hasMore = historyStore.use.hasMore();
  const currentPage = historyStore.use.currentPage();

  const getHistoryQuery = async () => {
    try {
      await getPaginated({
        page: currentPage + 1,
      });
    } catch (error) {
      logger(error);
    }
  };

  useEffect(() => {
    get(sizeOnMount);

    return () => {
      cleanUpHistory();
    };
  }, []);

  return { data, status, hasMore, total, getHistoryQuery };
}
