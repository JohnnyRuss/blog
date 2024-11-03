import { useNavigate, Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { articleStore } from "@/store";
import { useAppUIContext } from "@/Providers/useProviders";
import { useDeleteArticleQuery } from "@/hooks/api/articles";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import {
  CategoryChip,
  StandSpinner,
  ErrorMessage,
  AuthorIdentifier,
} from "@/components/Layouts";
import * as Styled from "./styles/articleHead.styled";
import ArticleHeadActions from "./ArticleHeadActions";
import { Edit, Delete } from "@/components/Layouts/Icons";

type ArticleSubHeadT = {
  isFollowingUser: boolean;
  checkIsFollowingUser: (userId: string) => Promise<void>;
};

const ArticleSubHead: React.FC<ArticleSubHeadT> = ({
  isFollowingUser,
  checkIsFollowingUser,
}) => {
  const navigate = useNavigate();

  const article = articleStore.use.article();

  const { activateDialog } = useAppUIContext();
  const { onDelete: deleteArticleQuery, status: deleteStatus } =
    useDeleteArticleQuery();

  const { isAuthenticated, decodedUser } = useCheckIsAuthenticatedUser(true);

  const onDelete = () =>
    activateDialog({
      message: "Are you sure you want to delete this <TARGET>",
      target: "Article",
      title: "Delete Article",
      type: "danger",
      onConfirm: () =>
        deleteArticleQuery({
          articleId: article._id,
          articleSlug: article.slug,
        }),
    });

  const onEdit = () =>
    navigate(`${PATHS.write}?edit=${article.slug}`, { state: { article } });

  return (
    <>
      {deleteStatus.error && (
        <div style={{ padding: "3rem 1rem" }}>
          <ErrorMessage message={deleteStatus.message} />
        </div>
      )}

      <Styled.ArticleHead>
        <div className="article-head__sub">
          <div className="article-head__sub-box">
            <AuthorIdentifier
              date={article.createdAt}
              author={article.author}
            />

            {isAuthenticated && decodedUser._id === article.author._id && (
              <div className="article-head__author-actions">
                <button onClick={onEdit}>
                  <Edit />
                </button>

                <button onClick={onDelete}>
                  <Delete />
                </button>
              </div>
            )}
          </div>

          <div className="article-head__sub-box actions-box">
            <CategoryChip category={article.categories[0]} size="md" />

            <ArticleHeadActions
              isFollowingUser={isFollowingUser}
              checkIsFollowingUser={checkIsFollowingUser}
            />
          </div>
        </div>

        <ul className="article-head__categories-list">
          {article.categories.map((category) => (
            <li key={category._id}>
              <Link to={`${PATHS.blog_page}?category=${category.query}`}>
                #{category.title}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="article-head__title">{article.title}</h3>
      </Styled.ArticleHead>

      {deleteStatus.loading && <StandSpinner />}
    </>
  );
};

export default ArticleSubHead;
