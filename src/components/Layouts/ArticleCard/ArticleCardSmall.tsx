import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import { useQuill } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./article.styled";
import CardHead from "./components/CardHead";
import CardFooter from "./components/CardFooter";
import { LineClamp } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type ArticleCardSmallT = {
  article: ArticleShortT;
  showLikeButton?: boolean;
};

const ArticleCardSmall: React.FC<ArticleCardSmallT> = ({
  article,
  showLikeButton = true,
}) => {
  const theme = useTheme();

  const { description, thumbnail } = useQuill(article.body);

  return (
    <Styled.ArticleCardSmall>
      <li className="article-sm__body">
        <div className="article-sm__body-content">
          <CardHead author={article.author} />

          <div className="article-sm__body-content--text">
            <Link
              to={DYNAMIC_ROUTES.article_page(article.slug)}
              className="article-sm__body-content--title"
            >
              <LineClamp
                clamp={1}
                component="h3"
                text={article.title}
                showAsTitle={true}
              />
            </Link>

            <LineClamp
              clamp={5}
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

          <CardFooter
            likes={article.likes}
            articleId={article._id}
            showLikeButton={showLikeButton}
          />
        </div>

        {thumbnail && (
          <figure className="article-sm__body-fig">
            <img
              width="100%"
              title="card"
              loading="lazy"
              src={thumbnail}
              alt="card"
            />
          </figure>
        )}
      </li>
    </Styled.ArticleCardSmall>
  );
};

export default ArticleCardSmall;
