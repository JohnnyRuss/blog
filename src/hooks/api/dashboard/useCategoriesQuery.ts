/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { dashboardStore } from "@/store";

export default function useCategoriesQuery() {
  const status = dashboardStore.use.categoriesStatus();
  const data = dashboardStore.use.categories();
  const get = dashboardStore.use.getCategories();

  useEffect(() => {
    get();
  }, []);

  return { status, data };
}
