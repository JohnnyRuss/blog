import { useTheme } from "styled-components";

import * as Styled from "./article.styled";
import CardFooter from "./components/CardFooter";
import CardHead from "./components/CardHead";
import { LineClamp } from "@/components/Layouts";

type ArticleCardSmallT = {};

const ArticleCardSmall: React.FC<ArticleCardSmallT> = () => {
  const theme = useTheme();

  return (
    <Styled.ArticleCardSmall to="/blog/123">
      <li className="article-sm__body">
        <div className="article-sm__body-content">
          <CardHead />

          <div className="article-sm__body-content--text">
            <LineClamp
              clamp={2}
              component="h3"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus error nihil fugit tenetur accusantium repellendus, quae rerum ad corporis."
            />

            <LineClamp
              clamp={2}
              sx={{
                fontSize: theme.fontSize.sm,
                color:
                  theme.mode === "dark"
                    ? theme.colors.gray
                    : theme.colors.gray_dark,
              }}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum doloribus error nihil fugit tenetur accusantium repellendus, quae rerum ad corporis."
            />
          </div>

          <CardFooter />
        </div>

        <figure className="article-sm__body-fig">
          <img
            width="100%"
            title="card"
            loading="lazy"
            src="https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
            alt="card"
          />
        </figure>
      </li>
    </Styled.ArticleCardSmall>
  );
};

export default ArticleCardSmall;
