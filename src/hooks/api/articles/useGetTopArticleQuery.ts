/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetTopArticleQuery() {
  const status = articleStore.use.topArticleStatus();
  const data = articleStore.use.topArticle();
  const get = articleStore.use.getTopArticle();
  const cleanUp = articleStore.use.cleanUpTopArticle();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { data, status };
}
