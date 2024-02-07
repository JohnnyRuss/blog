/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { listsStore, userStore } from "@/store";

export default function useGetListsQuery(limit?: number) {
  const { _id: userId } = userStore.use.userDetails();

  const data = listsStore.use.lists();
  const get = listsStore.use.getLists();
  const status = listsStore.use.listsStatus();
  const cleanUp = listsStore.use.cleanUpLists();

  useEffect(() => {
    if (!userId) return;

    (async () => await get({ userId, limit }))();

    return () => {
      cleanUp();
    };
  }, [userId, limit]);

  return { data, status };
}
