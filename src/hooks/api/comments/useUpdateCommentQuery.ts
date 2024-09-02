import { commentsStore } from "@/store";
import { UpdateCommentArgsT } from "@/interface/db/comment.types";

export default function useUpdateCommentQuery() {
  const updateCommentQuery = commentsStore.use.updateComment();

  const onUpdateCommentQuery = async (args: UpdateCommentArgsT) => {
    await updateCommentQuery(args);
  };

  return { onUpdateCommentQuery };
}
