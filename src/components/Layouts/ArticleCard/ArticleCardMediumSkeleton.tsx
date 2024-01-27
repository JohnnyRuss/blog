import Skeleton from "react-loading-skeleton";

import * as Styled from "./article.styled";
import CardHeadSkeleton from "./components/CardHeadSkeleton";
import CardFooterSkeleton from "./components/CardFooterSkeleton";

const ArticleCardMediumSkeleton: React.FC = () => {
  return (
    <Styled.ArticleCardMedium
      to=""
      style={{ minWidth: "100%", minHeight: "400px" }}
    >
      <li className="article-md__body">
        <figure className="article-md__body-fig">
          <Skeleton
            width="100%"
            height="100%"
            style={{ marginBottom: "-20px", borderRadius: "inherit" }}
          />
        </figure>

        <div className="article-md__body-content">
          <CardHeadSkeleton />

          <div>
            <div>
              <Skeleton count={2} height="20px" />
            </div>

            <div>
              <Skeleton count={2} />
            </div>
          </div>

          <div>
            <Skeleton width="100px" />
          </div>

          <CardFooterSkeleton />
        </div>
      </li>
    </Styled.ArticleCardMedium>
  );
};

export default ArticleCardMediumSkeleton;
