/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { listsStore } from "@/store";

export default function useGetListArticlesQuery() {
  const { listId } = useParams();

  const get = listsStore.use.getListArticles();
  const getPaginated = listsStore.use.getPaginatedListArticles();
  const cleanUp = listsStore.use.cleanUpListArticles();

  const data = listsStore.use.listArticles();
  const status = listsStore.use.listArticlesStatus();

  const total = data.length;
  const hasMore = listsStore.use.hasMore();
  const currentPage = listsStore.use.currentPage();

  const getPaginatedData = async () => {
    if (!listId) return;
    await getPaginated({ listId, page: currentPage + 1 });
  };

  useEffect(() => {
    if (!listId) return;

    (async () => await get(listId))();

    return () => {
      cleanUp();
    };
  }, [listId]);

  return { data, status, hasMore, total, getPaginatedData };
}
