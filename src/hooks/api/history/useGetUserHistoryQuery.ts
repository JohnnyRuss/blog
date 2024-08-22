/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { historyStore } from "@/store";

export default function useGetUserHistoryQuery(sizeOnMount?: number) {
  const get = historyStore.use.getHistory();
  const getPaginated = historyStore.use.getHistoryPaginated();
  const cleanUpHistory = historyStore.use.cleanUpHistory();

  const data = historyStore.use.history();
  const status = historyStore.use.status();

  const total = data.reduce((acc, item) => (acc += item.articles.length), 0);
  const hasMore = historyStore.use.hasMore();
  const currentPage = historyStore.use.currentPage();

  const getHistoryQuery = async () =>
    await getPaginated({ page: currentPage + 1 });

  useEffect(() => {
    (async () => await get(sizeOnMount))();

    return () => {
      cleanUpHistory();
    };
  }, []);

  return { data, status, hasMore, total, getHistoryQuery };
}
