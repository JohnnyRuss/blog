import { useCommentsContext } from "@/Providers/useProviders";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import CommentOptionsDropdown from "./CommentOptionsDropdown";

import { CommentT } from "@/interface/db/comment.types";

type CommentBodyT = {
  comment: CommentT;
  articleAuthorId: string;
};

const CommentBody: React.FC<CommentBodyT> = ({ comment, articleAuthorId }) => {
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

  return (
    <li className="comments-list--item">
      <figure className="comments-list--item__fig">
        <img src={comment.author.avatar} alt={comment.author.fullname} />
      </figure>

      <div className="comments-list--item__content">
        {isAuthenticated && (isCommentAuthor || isArticleAuthor) && (
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
    </li>
  );
};

export default CommentBody;
