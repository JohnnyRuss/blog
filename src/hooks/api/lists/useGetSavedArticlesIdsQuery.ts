/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { listsStore } from "@/store";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

export default function useGetSavedArticlesIdsQuery() {
  const get = listsStore.use.getSavedArticlesIds();
  const data = listsStore.use.savedArticlesIds();
  const cleanUp = listsStore.use.cleanUpSavedArticlesIds();

  const { check } = useCheckIsAuthenticatedUser(false);

  useEffect(() => {
    const { isAuthenticatedUser } = check();

    if (!isAuthenticatedUser) return;

    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { data };
}
