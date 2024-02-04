/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { listsStore } from "@/store";

export default function useGetListDetailsQuery() {
  const { listId, username } = useParams();

  const data = listsStore.use.listDetails();
  const get = listsStore.use.getListDetails();
  const status = listsStore.use.listDetailsStatus();
  const cleanUp = listsStore.use.cleanUpListDetails();

  useEffect(() => {
    if (!listId || !username) return;

    get(listId);

    return () => {
      cleanUp();
    };
  }, [listId, username]);

  return { data, status };
}
