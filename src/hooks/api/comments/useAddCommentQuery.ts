import { commentsStore } from "@/store";
import { AddCommentArgsT } from "@/interface/db/comment.types";

export default function useAddCommentQuery() {
  const addCommentQuery = commentsStore.use.addComment();

  const onAddCommentQuery = async (args: AddCommentArgsT) => {
    await addCommentQuery(args);
  };

  return { onAddCommentQuery };
}
