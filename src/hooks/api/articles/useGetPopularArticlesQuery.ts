/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetPopularArticlesQuery(runOnMount: boolean = true) {
  const data = articleStore.use.popularArticles();
  const status = articleStore.use.popularStatus();
  const get = articleStore.use.getPopularArticles();
  const cleanUp = articleStore.use.cleanUpPopularArticles();

  useEffect(() => {
    if (!runOnMount) return;

    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, [runOnMount]);

  return { data, status };
}
