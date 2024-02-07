/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { dashboardStore } from "@/store";

export default function useCategoriesQuery() {
  const data = dashboardStore.use.categories();
  const get = dashboardStore.use.getCategories();
  const status = dashboardStore.use.categoriesStatus();
  const cleanUp = dashboardStore.use.cleanUpCategories();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
