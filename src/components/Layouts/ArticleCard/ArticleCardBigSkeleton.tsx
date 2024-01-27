import Skeleton from "react-loading-skeleton";

import * as Styled from "./article.styled";
import { AuthorIdentifierSkeleton } from "@/components/Layouts";

const ArticleCardBigSkeleton: React.FC = () => {
  return (
    <Styled.ArticleCardBig to={""}>
      <li className="article-card">
        <figure className="article-card__fig">
          <Skeleton width="100%" height="100%" style={{ minHeight: "100%" }} />
        </figure>

        <div className="article-card__content">
          <div className="article-card__content-header">
            <AuthorIdentifierSkeleton />

            <Skeleton
              width="200px"
              height="45px"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div>
            <Skeleton width="500px" style={{ maxWidth: "100%" }} />
            <Skeleton width="500px" style={{ maxWidth: "50%" }} />
          </div>

          <div style={{ width: "100%" }}>
            <Skeleton count={3} width="100%" style={{ maxWidth: "100%" }} />
            <Skeleton width="100%" style={{ maxWidth: "50%" }} />
            <Skeleton count={2} width="100%" style={{ maxWidth: "100%" }} />
            <Skeleton width="100%" style={{ maxWidth: "30%" }} />
          </div>

          <Skeleton width="150px" style={{ maxWidth: "100%" }} />
        </div>
      </li>
    </Styled.ArticleCardBig>
  );
};

export default ArticleCardBigSkeleton;
