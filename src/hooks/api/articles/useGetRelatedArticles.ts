/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetRelatedArticles() {
  const data = articleStore.use.relatedArticles();
  const status = articleStore.use.relatedStatus();
  const getRelatedArticles = articleStore.use.getRelatedArticles();
  const cleanUpRelatedArticles = articleStore.use.cleanUpRelatedArticles();

  useEffect(() => {
    getRelatedArticles();

    return () => {
      cleanUpRelatedArticles();
    };
  }, []);

  return { data, status };
}
