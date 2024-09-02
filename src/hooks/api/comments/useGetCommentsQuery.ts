import { commentsStore } from "@/store";
import { GetCommentsArgsT } from "@/interface/db/comment.types";

export default function useGetCommentsQuery() {
  const getCommentsQuery = commentsStore.use.getComments();
  const cleanUpComments = commentsStore.use.cleanUpComments();
  const data = commentsStore.use.comments();

  const onGetCommentsQuery = async (args: GetCommentsArgsT) => {
    await getCommentsQuery(args);
  };

  return { onGetCommentsQuery, cleanUpComments, data };
}
