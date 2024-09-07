import { commentsStore } from "@/store";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useCommentsContext } from "@/Providers/useProviders";

import CommentOptionsDropdown from "./CommentOptionsDropdown";
import CommentBodySkeleton from "./CommentBodySkeleton";

import { CommentT } from "@/interface/db/comment.types";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type CommentBodyT = {
  comment: CommentT;
  showOptions: boolean;
  articleAuthorId: string;
};

const CommentBody: React.FC<CommentBodyT> = ({
  comment,
  showOptions,
  articleAuthorId,
}) => {
  const updateStatus = commentsStore.use.updateCommentStatus();
  const deleteStatus = commentsStore.use.deleteCommentStatus();

  const { onStartDeleteComment, onStartUpdateComment } = useCommentsContext();

  const onUpdateComment = () => onStartUpdateComment({ comment });

  const onDeleteComment = () =>
    onStartDeleteComment({
      articleAuthorId,
      commentId: comment._id,
      commentAuthorId: comment.author._id,
    });

  const { decodedUser, isAuthenticated } = useCheckIsAuthenticatedUser(true);

  const isCommentAuthor = decodedUser?._id === comment.author._id;
  const isArticleAuthor = decodedUser?._id === articleAuthorId;

  const isAllowedOptions =
    showOptions && isAuthenticated && (isCommentAuthor || isArticleAuthor);

  const isDeletingCurrentComment = deleteStatus.commentId === comment._id;
  const isUpdatingCurrentComment = updateStatus.commentId === comment._id;

  const isModifyingCurrentComment =
    isDeletingCurrentComment || isUpdatingCurrentComment;

  const isLoading = deleteStatus.loading || updateStatus.loading;
  const hasError = deleteStatus.error || updateStatus.error;
  const message = deleteStatus.message || updateStatus.message;

  return isLoading && isModifyingCurrentComment ? (
    <CommentBodySkeleton />
  ) : (
    <li className="comments-list--item">
      <div className="comments-list--item__wrapper">
        <figure className="comments-list--item__fig">
          <img src={comment.author.avatar} alt={comment.author.fullname} />
        </figure>

        <div className="comments-list--item__content">
          {isAllowedOptions && (
            <CommentOptionsDropdown
              isArticleAuthor={isArticleAuthor}
              isCommentAuthor={isCommentAuthor}
              onDeleteComment={onDeleteComment}
              onUpdateComment={onUpdateComment}
            />
          )}

          <span className="comments-list--item__content-username">
            {comment.author.fullname}
          </span>

          <p className="comments-list--item__content-text">{comment.text}</p>

          <span className="comments-list--item__content-date">
            {new Date(comment.createdAt).toLocaleDateString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              month: "short",
              year: "numeric",
              day: "2-digit",
            })}
          </span>
        </div>
      </div>

      {hasError && isModifyingCurrentComment && (
        <ErrorMessage message={message} />
      )}
    </li>
  );
};

export default CommentBody;
