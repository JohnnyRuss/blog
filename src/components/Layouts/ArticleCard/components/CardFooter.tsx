import { listsStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useLikeArticleQuery } from "@/hooks/api/articles";

import * as Styled from "./styles/cardFooter.styled";
import { Heart, Bookmark, Comment } from "@/components/Layouts/Icons";

type CardFooterT = {
  articleId: string;
  likes: Array<string>;
  showLikeButton: boolean;
};

const CardFooter: React.FC<CardFooterT> = ({
  likes,
  articleId,
  showLikeButton,
}) => {
  const { setParam } = useSearchParams();

  const { user, isAuthenticated } = useCheckIsAuthenticatedUser(true);

  const savedArticlesIds = listsStore.use.savedArticlesIds();

  const { onLike } = useLikeArticleQuery();

  const onSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!articleId) return;

    setParam("save", articleId);
  };

  const onLikeArticle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated || !articleId) return;

    onLike({ articleId });
  };

  return (
    <Styled.CardFooter>
      {showLikeButton && (
        <button
          onClick={onLikeArticle}
          className={`card-footer__btn heart ${
            likes.includes(user._id) ? "active" : ""
          }`}
        >
          <Heart />
          <span>{likes.length}</span>
        </button>
      )}

      <button className="card-footer__btn comments">
        <Comment />
        <span>7</span>
      </button>

      {isAuthenticated && (
        <button
          onClick={onSave}
          className={`card-footer__btn save ${
            savedArticlesIds.includes(articleId) ? "active" : ""
          }`}
        >
          <Bookmark />
        </button>
      )}
    </Styled.CardFooter>
  );
};

export default CardFooter;
