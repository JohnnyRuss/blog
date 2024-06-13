/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import { useQuill } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./article.styled";
import CardHead from "./components/CardHead";
import CardFooter from "./components/CardFooter";
import { LineClamp } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type ArticleCardMediumT = {
  article: ArticleShortT;
  showLikeButton?: boolean;
};

const ArticleCardMedium: React.FC<ArticleCardMediumT> = ({
  article,
  showLikeButton = false,
}) => {
  const theme = useTheme();

  const descriptionStyles = useMemo(
    () => ({
      fontSize: theme.fontSize.sm,
      color: theme.mode === "dark" ? theme.colors.gray : theme.colors.gray_dark,
    }),
    []
  );

  const { description, thumbnail } = useQuill(article.body);

  return (
    <Styled.ArticleCardMedium>
      <li className="article-md__body">
        {thumbnail && (
          <figure className="article-md__body-fig">
            <img
              width="100%"
              title="card"
              loading="lazy"
              src={thumbnail}
              alt={article.title}
            />
          </figure>
        )}

        <div className="article-md__body-content">
          <CardHead author={article.author} />

          <div className="article-md__body-content--text">
            <Link to={DYNAMIC_ROUTES.article_page(article.slug)}>
              <LineClamp clamp={2} component="h3" text={article.title} />
            </Link>

            <LineClamp clamp={2} sx={descriptionStyles} text={description} />
          </div>

          <div className="article-md__body-content--about">
            <span className="article-md__body-content--about__date">
              {moment(article.createdAt).format("MMM-DD-YYYY")}
            </span>
          </div>

          <CardFooter
            likes={article.likes}
            articleId={article._id}
            showLikeButton={showLikeButton}
          />
        </div>
      </li>
    </Styled.ArticleCardMedium>
  );
};

export default ArticleCardMedium;
