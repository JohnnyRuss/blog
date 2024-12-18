import { memo } from "react";

import { useSearchParams } from "@/hooks/utils";
import { articleStore, listsStore } from "@/store";
import { useFollowUserQuery } from "@/hooks/api/userFollow";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useLikeArticleQuery } from "@/hooks/api/articles";
import { useAppUIContext } from "@/Providers/useProviders";

import { FollowButton } from "@/components/Layouts";
import * as Styled from "./styles/articleHeadActions.styled";
import { EyeOpen, Heart, Bookmark, Comment } from "@/components/Layouts/Icons";

type ArticleHeadActionsT = {
  showFollowButton?: boolean;
  isFollowingUser: boolean;
  checkIsFollowingUser: (userId: string) => Promise<void>;
};

const ArticleHeadActions: React.FC<ArticleHeadActionsT> = memo(
  ({ showFollowButton = true, isFollowingUser, checkIsFollowingUser }) => {
    const { activateAuthPopup } = useAppUIContext();

    const { setParam } = useSearchParams();

    const article = articleStore.use.article();
    const { isAuthenticated, user } = useCheckIsAuthenticatedUser(true);
    const belongsToActiveUser = article.author._id === user._id;

    const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();

      if (!article._id) return;

      setParam("save", article._id);
    };

    const { onLike: onLikeQuery } = useLikeArticleQuery();

    const onLike = async () => {
      if (!isAuthenticated) return activateAuthPopup();
      await onLikeQuery({ articleId: article._id });
    };

    const onShowComments = () => {
      setParam("comments", "1");
    };

    const { followQuery, status } = useFollowUserQuery(article.author._id);

    const onFollow = async () => {
      if (belongsToActiveUser || !article.author._id) return;

      await followQuery();
      await checkIsFollowingUser(article.author._id);
    };

    const savedArticlesIds = listsStore.use.savedArticlesIds();

    return (
      <Styled.ArticleHeadActions>
        {isAuthenticated && !belongsToActiveUser && showFollowButton && (
          <FollowButton
            onClick={onFollow}
            disabled={status.loading}
            isFollowing={isFollowingUser}
          />
        )}

        <div className="actions-item views">
          <EyeOpen />
          <span>{article.views}</span>
        </div>

        <button
          onClick={onLike}
          className={`actions-item heart ${
            article.likes.includes(user._id) ? "active" : ""
          }`}
        >
          <Heart />
          <span>{article.likes.length}</span>
        </button>

        <button
          onClick={onShowComments}
          className={`actions-item comment ${
            article.likes.includes(user._id) ? "active" : ""
          }`}
        >
          <Comment />
          <span>{article.commentsCount}</span>
        </button>

        {isAuthenticated && !belongsToActiveUser && (
          <button
            onClick={onSave}
            className={`actions-item bookmark ${
              savedArticlesIds.includes(article._id) ? "active" : ""
            }`}
          >
            <Bookmark />
          </button>
        )}
      </Styled.ArticleHeadActions>
    );
  }
);

export default ArticleHeadActions;
