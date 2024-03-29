import { useTheme } from "styled-components";

import { useQuill } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import {
  LineClamp,
  CategoryChip,
  AuthorIdentifier,
} from "@/components/Layouts";
import * as Styled from "./article.styled";

import { ArticleShortT } from "@/interface/db/article.types";

type ArticleCardBigT = {
  article: ArticleShortT;
};

const ArticleCardBig: React.FC<ArticleCardBigT> = ({ article }) => {
  const theme = useTheme();

  const { description, thumbnail } = useQuill(article.body);
  const category = article.categories[0];

  return (
    <Styled.ArticleCardBig to={DYNAMIC_ROUTES.article_page(article.slug)}>
      <li className="article-card">
        <figure className="article-card__fig">
          <img width="100%" height="100%" src={thumbnail} alt="post" />
        </figure>

        <div className="article-card__content">
          <div className="article-card__content-header">
            <AuthorIdentifier
              date={article.createdAt}
              author={article.author}
            />

            <CategoryChip size="md" category={category} />
          </div>

          <LineClamp clamp={2} component="h3" text={article.title} />

          <LineClamp
            clamp={7}
            text={description}
            sx={{
              fontSize: theme.fontSize.sm,
              color:
                theme.mode === "dark"
                  ? theme.colors.gray
                  : theme.colors.gray_dark,
            }}
          />

          <button>
            <strong>
              <u>View More</u>
            </strong>
          </button>
        </div>
      </li>
    </Styled.ArticleCardBig>
  );
};

export default ArticleCardBig;
