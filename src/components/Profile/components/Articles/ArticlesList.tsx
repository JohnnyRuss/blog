import { useParams, useNavigate, Link } from "react-router-dom";

import { userStore } from "@/store";
import { PATHS } from "@/config/paths";

import {
  useDeleteArticleQuery,
  useGetUserArticlesQuery,
} from "@/hooks/api/articles";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import { generateArray, textCapitalize } from "@/utils";
import { useAppUIContext } from "@/Providers/useProviders";

import {
  EmptyMessage,
  ArticleCardSmall,
  ArticleCardSmallSkeleton,
} from "@/components/Layouts";
import * as Styled from "./articlesList.styled";
import ArticleCardLayover from "./ArticleCardLayover";

import { ArticleSchemaT } from "@/utils/validations/articleSchema";

type ArticlesListT = {
  limit?: number;
  redirectPath?: string;
};

const ArticlesList: React.FC<ArticlesListT> = ({ limit, redirectPath }) => {
  const navigate = useNavigate();

  const { username } = useParams();
  const { data, status } = useGetUserArticlesQuery(username, limit);

  const onEdit = (article: ArticleSchemaT, articleSlug: string) =>
    navigate(`${PATHS.write}?edit=${articleSlug}`, { state: { article } });

  const { activateDialog } = useAppUIContext();
  const { onDelete: deleteArticleQuery, status: deleteStatus } =
    useDeleteArticleQuery();

  const onDelete = (articleSlug: string, articleId: string) =>
    activateDialog({
      message: "Are you sure you want to delete this <TARGET>",
      target: "Article",
      title: "Delete Article",
      type: "danger",
      onConfirm: () => deleteArticleQuery({ articleId, articleSlug }),
    });

  const user = userStore.use.userDetails();
  const { decodedUser } = useCheckIsAuthenticatedUser(true);

  const emptyMessage =
    decodedUser?._id === user._id
      ? `You have not published articles`
      : `${textCapitalize(user.fullname)} has not public articles`;

  const belongsToActiveUser =
    decodedUser?.username === user?.username && decodedUser._id === user._id;

  return (
    <>
      <Styled.ArticlesList>
        {status.loading ? (
          generateArray(limit || 6).map((id) => (
            <ArticleCardSmallSkeleton key={id} />
          ))
        ) : data.length <= 0 ? (
          <EmptyMessage message={emptyMessage} />
        ) : (
          data.map((article) => (
            <ArticleCardLayover
              key={article._id}
              errorMessage={
                article._id === deleteStatus.articleId && deleteStatus.error
                  ? deleteStatus.message
                  : ""
              }
              loading={
                article._id === deleteStatus.articleId && deleteStatus.loading
              }
              onDelete={() => onDelete(article.slug, article._id)}
              onEdit={() => onEdit(article, article.slug)}
              showActions={belongsToActiveUser}
            >
              <ArticleCardSmall article={article} />
            </ArticleCardLayover>
          ))
        )}
      </Styled.ArticlesList>

      {redirectPath && data.length > 0 && (
        <Link to={redirectPath} className="review-block__more">
          Show All
        </Link>
      )}
    </>
  );
};

export default ArticlesList;
