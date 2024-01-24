import moment from "moment";
import { useTheme } from "styled-components";

import { DYNAMIC_ROUTES } from "@/config/paths";

import * as Styled from "./article.styled";
import CardHead from "./components/CardHead";
import CardFooter from "./components/CardFooter";
import { LineClamp } from "@/components/Layouts";

type ArticleCardMediumT = {};

const ArticleCardMedium: React.FC<ArticleCardMediumT> = () => {
  const theme = useTheme();

  return (
    <Styled.ArticleCardMedium to={DYNAMIC_ROUTES.article_page("some_post")}>
      <li className="article-md__body">
        <figure className="article-md__body-fig">
          <img
            width="100%"
            title="card"
            loading="lazy"
            src="https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg"
            alt="card"
          />
        </figure>

        <div className="article-md__body-content">
          <CardHead />

          <div className="article-md__body-content--text">
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

          <div className="article-md__body-content--about">
            <span className="article-md__body-content--about__date">
              {moment().format("MMM-DD-YYYY")}
            </span>
          </div>

          <CardFooter />
        </div>
      </li>
    </Styled.ArticleCardMedium>
  );
};

export default ArticleCardMedium;
