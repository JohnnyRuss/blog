import { commentsStore } from "@/store";
import { DeleteCommentArgsT } from "@/interface/db/comment.types";

export default function useDeleteCommentQuery() {
  const deleteCommentQuery = commentsStore.use.deleteComment();

  const onDeleteCommentQuery = async (args: DeleteCommentArgsT) =>
    await deleteCommentQuery(args);

  return { onDeleteCommentQuery };
}
