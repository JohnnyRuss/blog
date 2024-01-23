import { NODE_MODE } from "@/config/env";
import { articleStore } from "@/store";

import { DeleteArticleArgsT } from "@/interface/db/article.types";

export default function useDeleteArticleQuery() {
  const status = articleStore.use.deleteStatus();
  const deleteArticleQuery = articleStore.use.delete();

  const onDelete = async (args: DeleteArticleArgsT) => {
    try {
      await deleteArticleQuery(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { status, onDelete };
}
