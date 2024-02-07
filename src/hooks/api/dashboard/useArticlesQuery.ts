/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { dashboardStore } from "@/store";

export default function useArticlesQuery() {
  const data = dashboardStore.use.articles();
  const get = dashboardStore.use.getArticles();
  const status = dashboardStore.use.articlesStatus();
  const cleanUp = dashboardStore.use.cleanUArticles();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
