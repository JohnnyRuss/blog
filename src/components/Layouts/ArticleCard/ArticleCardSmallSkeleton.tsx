import Skeleton from "react-loading-skeleton";
import * as Styled from "./article.styled";
import CardHeadSkeleton from "./components/CardHeadSkeleton";
import CardFooterSkeleton from "./components/CardFooterSkeleton";

const ArticleCardSmallSkeleton: React.FC = () => {
  return (
    <Styled.ArticleCardSmall as="div" to="" style={{ marginTop: "2rem" }}>
      <li className="article-sm__body">
        <div className="article-sm__body-content">
          <CardHeadSkeleton />

          <div className="article-sm__body-content--text">
            <Skeleton count={2} />

            <Skeleton count={2} />
          </div>

          <CardFooterSkeleton />
        </div>

        <figure className="article-sm__body-fig">
          <Skeleton width="100%" height="100%" />
        </figure>
      </li>
    </Styled.ArticleCardSmall>
  );
};

export default ArticleCardSmallSkeleton;
