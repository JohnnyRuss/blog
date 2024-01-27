/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetTopArticleQuery() {
  const status = articleStore.use.topArticleStatus();
  const data = articleStore.use.topArticle();
  const getTopArticle = articleStore.use.getTopArticle();
  const cleanUpTopArticle = articleStore.use.cleanUpTopArticle();

  useEffect(() => {
    getTopArticle();

    return () => {
      cleanUpTopArticle();
    };
  }, []);

  return { data, status };
}
