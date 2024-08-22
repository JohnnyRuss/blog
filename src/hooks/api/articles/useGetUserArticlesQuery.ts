/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";
import article from "@/store/article";

export default function useGetUserArticlesQuery(
  username: string,
  limit?: number
) {
  const get = articleStore.use.getUserArticles();
  const cleanUp = article.use.cleanUpUserArticles();
  const data = articleStore.use.articles();
  const status = articleStore.use.readAllStatus();

  useEffect(() => {
    if (!username) return;

    (async () => await get({ username, limit }))();

    return () => {
      cleanUp();
    };
  }, [username, limit]);

  return { status, data };
}
