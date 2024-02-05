import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useQuill } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./article.styled";
import CardHead from "./components/CardHead";
import CardFooter from "./components/CardFooter";
import { LineClamp } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type ArticleCardSmallT = {
  article: ArticleShortT;
};

const ArticleCardSmall: React.FC<ArticleCardSmallT> = ({ article }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { description, thumbnail } = useQuill(article.body);

  const onNavigateToArticle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(DYNAMIC_ROUTES.article_page(article.slug));
  };

  return (
    <Styled.ArticleCardSmall onClick={onNavigateToArticle}>
      <li className="article-sm__body">
        <div className="article-sm__body-content">
          <CardHead author={article.author} />

          <div className="article-sm__body-content--text">
            <LineClamp clamp={2} component="h3" text={article.title} />

            <LineClamp
              clamp={2}
              sx={{
                fontSize: theme.fontSize.sm,
                color:
                  theme.mode === "dark"
                    ? theme.colors.gray
                    : theme.colors.gray_dark,
              }}
              text={description}
            />
          </div>

          <CardFooter articleId={article._id} />
        </div>

        <figure className="article-sm__body-fig">
          <img
            width="100%"
            title="card"
            loading="lazy"
            src={thumbnail}
            alt="card"
          />
        </figure>
      </li>
    </Styled.ArticleCardSmall>
  );
};

export default ArticleCardSmall;
