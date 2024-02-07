/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetPopularArticles() {
  const data = articleStore.use.popularArticles();
  const status = articleStore.use.popularStatus();
  const get = articleStore.use.getPopularArticles();
  const cleanUp = articleStore.use.cleanUpPopularArticles();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { data, status };
}
