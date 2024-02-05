import { listsStore } from "@/store";
import { DeleteListArgsT } from "@/interface/db/list.types";

export default function useDeleteListQuery() {
  const status = listsStore.use.deleteListStatus();
  const deleteList = listsStore.use.deleteList();

  const deleteListQuery = (args: DeleteListArgsT) => deleteList(args);

  return { deleteListQuery, status };
}
