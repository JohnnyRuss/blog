import { articleStore, commentsStore } from "@/store";
import { useCommentsContext } from "@/Providers/useProviders";

import CommentBody from "./CommentBody";
import CommentBodySkeleton from "./CommentBodySkeleton";
import { Spinner, ErrorMessage } from "@/components/Layouts";

const CommentsList: React.FC = () => {
  const { commentsListRef } = useCommentsContext();

  const data = commentsStore.use.comments();
  const status = commentsStore.use.getCommentsStatus();
  const addStatus = commentsStore.use.addCommentStatus();

  const articleAuthorId = articleStore.use.article().author._id;

  return (
    <ul className="comments-list" ref={commentsListRef}>
      {status.loading ? (
        <Spinner />
      ) : status.error ? (
        <ErrorMessage message={status.message} />
      ) : (
        data.map((comment) => (
          <CommentBody
            key={comment._id}
            comment={comment}
            articleAuthorId={articleAuthorId}
          />
        ))
      )}

      {addStatus.loading ? (
        <CommentBodySkeleton />
      ) : addStatus.error ? (
        <ErrorMessage message={addStatus.message} />
      ) : null}
    </ul>
  );
};

export default CommentsList;
