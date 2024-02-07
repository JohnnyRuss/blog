/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { articleStore } from "@/store";

export default function useReadAllArticlesQuery(defaultQuery?: string) {
  const { search } = useLocation();

  const get = articleStore.use.getAll();
  const getPaginated = articleStore.use.getAllPaginated();

  const status = articleStore.use.readAllStatus();

  const hasMore = articleStore.use.hasMore();
  const currentPage = articleStore.use.currentPage();

  const data = articleStore.use.articles();
  const total = data.length;

  const cleanUp = articleStore.use.cleanUpArticles();

  const getArticlesQuery = async () => {
    await getPaginated({
      page: currentPage + 1,
      query: `${search || ""}${defaultQuery || ""}`,
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await get({
        page: 1,
        query: `${search || ""}${defaultQuery || ""}`,
      });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, []);

  return { data, hasMore, total, getArticlesQuery, status };
}
