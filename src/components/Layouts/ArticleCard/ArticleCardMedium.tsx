/* eslint-disable react-hooks/exhaustive-deps */
import moment from "moment";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useQuill } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./article.styled";
import CardHead from "./components/CardHead";
import CardFooter from "./components/CardFooter";
import { LineClamp } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type ArticleCardMediumT = {
  article: ArticleShortT;
};

const ArticleCardMedium: React.FC<ArticleCardMediumT> = ({ article }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const descriptionStyles = useMemo(
    () => ({
      fontSize: theme.fontSize.sm,
      color: theme.mode === "dark" ? theme.colors.gray : theme.colors.gray_dark,
    }),
    []
  );

  const { description, thumbnail } = useQuill(article.body);

  const onNavigateToArticle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(DYNAMIC_ROUTES.article_page(article.slug));
  };

  return (
    <Styled.ArticleCardMedium onClick={onNavigateToArticle}>
      <li className="article-md__body">
        <figure className="article-md__body-fig">
          <img
            width="100%"
            title="card"
            loading="lazy"
            src={thumbnail}
            alt={article.title}
          />
        </figure>

        <div className="article-md__body-content">
          <CardHead author={article.author} />

          <div className="article-md__body-content--text">
            <LineClamp clamp={2} component="h3" text={article.title} />

            <LineClamp clamp={2} sx={descriptionStyles} text={description} />
          </div>

          <div className="article-md__body-content--about">
            <span className="article-md__body-content--about__date">
              {moment(article.createdAt).format("MMM-DD-YYYY")}
            </span>
          </div>

          <CardFooter articleId={article._id} />
        </div>
      </li>
    </Styled.ArticleCardMedium>
  );
};

export default ArticleCardMedium;
