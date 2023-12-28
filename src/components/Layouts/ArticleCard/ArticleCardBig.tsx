import { useTheme } from "styled-components";

import { useQuill } from "@/hooks/utils";

import {
  LineClamp,
  CategoryChip,
  AuthorIdentifier,
} from "@/components/Layouts";
import * as Styled from "./article.styled";

type ArticleCardBigT = {};

const ArticleCardBig: React.FC<ArticleCardBigT> = () => {
  const theme = useTheme();

  const x = localStorage.getItem("post");
  const quillValue = x ? JSON.parse(x) : "";

  const { getText } = useQuill();
  const text = getText(quillValue);

  return (
    <Styled.ArticleCardBig to="/blog/123">
      <li className="article-card">
        <figure className="article-card__fig">
          <img
            width="100%"
            height="100%"
            src="https://images.unsplash.com/photo-1600810457779-5250a03d83e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post"
          />
        </figure>

        <div className="article-card__content">
          <div className="article-card__content-header">
            <AuthorIdentifier />

            <CategoryChip bgColor="#B33F00" size="md" title="Culture" />
          </div>

          <LineClamp
            clamp={2}
            component="h3"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            velit quia ducimus error quasi harum eligendi mollitia nostrum nam
            dolorum."
          />

          <LineClamp
            clamp={7}
            text={text}
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
