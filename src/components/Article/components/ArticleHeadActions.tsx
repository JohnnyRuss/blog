/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import {
  useFollowUserQuery,
  useCheckIsFollowingUserQuery,
} from "@/hooks/api/userFollow";
import { articleStore, listsStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useLikeArticleQuery } from "@/hooks/api/articles";
import { useGetSavedArticlesIdsQuery } from "@/hooks/api/lists";

import { FollowButton } from "@/components/Layouts";
import * as Styled from "./styles/articleHeadActions.styled";
import { EyeOpen, Heart, Bookmark, Comment } from "@/components/Layouts/Icons";

type ArticleHeadActionsT = {
  showFollowButton?: boolean;
};

const ArticleHeadActions: React.FC<ArticleHeadActionsT> = ({
  showFollowButton = true,
}) => {
  const { setParam } = useSearchParams();

  useGetSavedArticlesIdsQuery();

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
    if (!isAuthenticated) return;
    await onLikeQuery({ articleId: article._id });
  };

  const onShowComments = () => setParam("comments", "1");

  const { followQuery, status } = useFollowUserQuery(article.author._id);
  const { check, isFollowingUser } = useCheckIsFollowingUserQuery();

  const onFollow = async () => {
    if (belongsToActiveUser) return;
    await followQuery();
    await check(article.author._id);
  };

  useEffect(() => {
    if (belongsToActiveUser) return;
    (async () => await check(article.author._id))();
  }, [belongsToActiveUser, article.author._id]);

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
        className={`actions-item heart ${
          article.likes.includes(user._id) ? "active" : ""
        }`}
      >
        <Comment />
        <span>{16}</span>
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
};

export default ArticleHeadActions;
