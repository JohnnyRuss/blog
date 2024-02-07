import { AddToListArgsT } from "@/interface/db/list.types";
import { listsStore } from "@/store";

export default function useAddToListQuery() {
  const addToList = listsStore.use.addToList();

  const add = async (args: AddToListArgsT) => await addToList(args);

  return { add };
}
