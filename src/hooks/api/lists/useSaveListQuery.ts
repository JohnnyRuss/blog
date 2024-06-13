/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { listsStore } from "@/store";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import { SaveListArgsT } from "@/interface/db/list.types";

export default function useSaveListQuery() {
  const save = listsStore.use.saveList();
  const remove = listsStore.use.removeList();
  const getSavedListsIds = listsStore.use.getSavedListsIds();

  const status = listsStore.use.saveListStatus();

  const savedListsIds = listsStore.use.savedListsIds();

  const onSave = (args: SaveListArgsT) => save(args);

  const onRemove = (args: SaveListArgsT) => remove(args);

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  useEffect(() => {
    if (!isAuthenticated) return;

    getSavedListsIds();

    return () => {};
  }, [isAuthenticated]);

  return { onSave, onRemove, status, savedListsIds };
}
