/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { articleStore } from "@/store";

export default function useGetRecentArticlesQuery() {
  const data = articleStore.use.recentArticles();
  const status = articleStore.use.recentStatus();
  const get = articleStore.use.getRecentArticles();
  const cleanUp = articleStore.use.cleanUpRecentArticles();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { data, status };
}
