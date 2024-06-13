/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { listsStore } from "@/store";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

export default function useGetSavedArticlesIdsQuery() {
  const get = listsStore.use.getSavedArticlesIds();
  const data = listsStore.use.savedArticlesIds();
  const cleanUp = listsStore.use.cleanUpSavedArticlesIds();

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  useEffect(() => {
    if (!isAuthenticated) return;

    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, [isAuthenticated]);

  return { data };
}
