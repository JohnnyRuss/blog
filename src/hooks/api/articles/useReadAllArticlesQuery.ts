/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { articleStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

export default function useReadAllArticlesQuery(defaultQuery?: string) {
  const { search } = useLocation();
  const { getParam } = useSearchParams();

  const get = articleStore.use.getAll();
  const getPaginated = articleStore.use.getAllPaginated();

  const status = articleStore.use.readAllStatus();

  const hasMore = articleStore.use.hasMore();
  const currentPage = articleStore.use.currentPage();

  const data = articleStore.use.articles();
  const total = data.length;

  const cleanUp = articleStore.use.cleanUpArticles();

  const searchQueryStr = getParam("search");
  const categoryQueryStr = getParam("category");
  const queryStr = search ? `${search}&` : "";

  const getArticlesQuery = async () => {
    await getPaginated({
      page: currentPage + 1,
      query: `${queryStr || ""}${defaultQuery || ""}`,
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await get({
        page: 1,
        query: `${queryStr || ""}${defaultQuery || ""}`,
      });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQueryStr, categoryQueryStr]);

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, []);

  return { data, hasMore, total, getArticlesQuery, status };
}
