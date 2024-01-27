/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { articleStore } from "@/store";

export default function useGetRecentArticlesQuery() {
  const data = articleStore.use.recentArticles();
  const status = articleStore.use.recentStatus();
  const getRecentArticles = articleStore.use.getRecentArticles();
  const cleanUpRecentArticles = articleStore.use.cleanUpRecentArticles();

  useEffect(() => {
    getRecentArticles();

    return () => {
      cleanUpRecentArticles();
    };
  }, []);

  return { data, status };
}
