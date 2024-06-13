/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { listsStore } from "@/store";

export default function useGetSavedListsQuery(userId: string) {
  const get = listsStore.use.getSavedLists();
  const data = listsStore.use.savedLists();
  const status = listsStore.use.savedListsStatus();

  useEffect(() => {
    get({ userId });
  }, [userId]);

  return { data, status };
}
