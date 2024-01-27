/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetPopularArticles() {
  const data = articleStore.use.popularArticles();
  const status = articleStore.use.popularStatus();
  const getPopularArticles = articleStore.use.getPopularArticles();
  const cleanUpPopularArticles = articleStore.use.cleanUpPopularArticles();

  useEffect(() => {
    getPopularArticles();

    return () => {
      cleanUpPopularArticles();
    };
  }, []);

  return { data, status };
}
