/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { listsStore } from "@/store";

export default function useGetListsToAddQuery() {
  const status = listsStore.use.listsToAddStatus();
  const data = listsStore.use.listsToAdd();
  const get = listsStore.use.getListsToAdd();

  useEffect(() => {
    get();
  }, []);

  return { status, data };
}
