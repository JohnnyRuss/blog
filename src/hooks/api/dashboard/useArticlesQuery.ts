/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { dashboardStore } from "@/store";

export default function useArticlesQuery() {
  const status = dashboardStore.use.articlesStatus();
  const data = dashboardStore.use.articles();
  const get = dashboardStore.use.getArticles();

  useEffect(() => {
    get();
  }, []);

  return { status, data };
}
