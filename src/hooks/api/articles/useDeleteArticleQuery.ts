import { articleStore } from "@/store";

import { DeleteArticleArgsT } from "@/interface/db/article.types";

export default function useDeleteArticleQuery() {
  const status = articleStore.use.deleteStatus();
  const deleteArticleQuery = articleStore.use.delete();

  const onDelete = async (args: DeleteArticleArgsT) =>
    await deleteArticleQuery(args);

  return { status, onDelete };
}
