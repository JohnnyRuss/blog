/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { NODE_MODE } from "@/config/env";
import { articleStore } from "@/store";

export default function useReadAllArticlesQuery(defaultQuery?: string) {
  const { search } = useLocation();

  const getAllArticles = articleStore.use.getAll();
  const getPaginatedArticles = articleStore.use.getAllPaginated();

  const status = articleStore.use.readAllStatus();

  const hasMore = articleStore.use.hasMore();
  const currentPage = articleStore.use.currentPage();

  const data = articleStore.use.articles();
  const total = data.length;

  const cleanUpArticles = articleStore.use.cleanUpArticles();

  const getArticlesQuery = async () => {
    try {
      await getPaginatedArticles({
        page: currentPage + 1,
        query: `${search || ""}${defaultQuery || ""}`,
      });
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        await getAllArticles({
          query: `${search || ""}${defaultQuery || ""}`,
          page: 1,
        });
      } catch (error) {
        NODE_MODE === "DEV" && console.log(error);
      }
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  useEffect(() => {
    return () => {
      cleanUpArticles();
    };
  }, []);

  return { data, hasMore, total, getArticlesQuery, status };
}
