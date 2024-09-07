import { articleStore, commentsStore } from "@/store";
import { useCommentsContext } from "@/Providers/useProviders";

import CommentBody from "./CommentBody";
import CommentBodySkeleton from "./CommentBodySkeleton";
import { Spinner, ErrorMessage, EmptyMessage } from "@/components/Layouts";

type CommentsListT = {
  showCommentOptions: boolean;
};

const CommentsList: React.FC<CommentsListT> = ({ showCommentOptions }) => {
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
      ) : data.length > 0 ? (
        data.map((comment) => (
          <CommentBody
            key={comment._id}
            comment={comment}
            showOptions={showCommentOptions}
            articleAuthorId={articleAuthorId}
          />
        ))
      ) : (
        <EmptyMessage message="There are no Comments yet." />
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
