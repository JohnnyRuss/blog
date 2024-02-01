import { AddToListAgsT } from "@/interface/db/list.types";
import { listsStore } from "@/store";

export default function useAddToListQuery() {
  const addToList = listsStore.use.addToList();

  const add = (args: AddToListAgsT) => addToList(args);

  return { add };
}
