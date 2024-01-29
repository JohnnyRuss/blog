import { useTheme } from "styled-components";

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
  const theme = useTheme();

  const { description, thumbnail } = useQuill(article.body);

  return (
    <Styled.ArticleCardSmall to={DYNAMIC_ROUTES.article_page("some_post")}>
      <li className="article-sm__body">
        <div className="article-sm__body-content">
          <CardHead
            author={{
              _id: article.author._id,
              avatar: article.author.avatar,
              fullname: article.author.fullname,
              username: article.author.username,
            }}
          />

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

          <CardFooter />
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
