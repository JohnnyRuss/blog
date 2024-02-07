/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { listsStore } from "@/store";

export default function useGetListsToAddQuery() {
  const data = listsStore.use.listsToAdd();
  const get = listsStore.use.getListsToAdd();
  const status = listsStore.use.listsToAddStatus();
  const cleanUp = listsStore.use.cleanUpListsToAdd();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
