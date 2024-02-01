/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { listsStore, userStore } from "@/store";

export default function useGetListsQuery(limit?: number) {
  const user = userStore.use.userDetails();

  const data = listsStore.use.lists();
  const get = listsStore.use.getLists();
  const status = listsStore.use.listsStatus();
  const cleanUpLists = listsStore.use.cleanUpLists();

  useEffect(() => {
    if (!user?._id) return;

    get({ userId: user._id, limit });

    return () => {
      cleanUpLists();
    };
  }, [user?._id, limit]);

  return { data, status };
}
