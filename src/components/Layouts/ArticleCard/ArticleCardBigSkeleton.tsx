import Skeleton from "react-loading-skeleton";

import * as Styled from "./article.styled";
import { AuthorIdentifierSkeleton } from "@/components/Layouts";

const ArticleCardBigSkeleton: React.FC<{ size?: "small" | "normal" }> = ({
  size = "normal",
}) => {
  return (
    <Styled.ArticleCardBig style={{ overflow: "hidden" }}>
      <li className="article-card">
        <figure className="article-card__fig">
          <Skeleton width="100%" height="100%" style={{ minHeight: "100%" }} />
        </figure>

        <div className="article-card__content">
          <div className="article-card__content-header">
            <AuthorIdentifierSkeleton />

            <Skeleton
              width="160px"
              height="45px"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div>
            {size === "normal" ? (
              <>
                <Skeleton width="500px" style={{ maxWidth: "100%" }} />
                <Skeleton width="500px" style={{ maxWidth: "50%" }} />
              </>
            ) : (
              <Skeleton width="500px" style={{ maxWidth: "100%" }} />
            )}
          </div>

          <div style={{ width: "100%" }}>
            {size === "normal" ? (
              <>
                <Skeleton count={3} width="100%" style={{ maxWidth: "100%" }} />
                <Skeleton width="100%" style={{ maxWidth: "50%" }} />
                <Skeleton count={2} width="100%" style={{ maxWidth: "100%" }} />
                <Skeleton width="100%" style={{ maxWidth: "30%" }} />
              </>
            ) : (
              <>
                <Skeleton count={2} width="100%" style={{ maxWidth: "100%" }} />
                <Skeleton width="100%" style={{ maxWidth: "50%" }} />
                <Skeleton width="100%" style={{ maxWidth: "100%" }} />
                <Skeleton width="100%" style={{ maxWidth: "30%" }} />
              </>
            )}
          </div>

          <Skeleton width="150px" style={{ maxWidth: "100%" }} />
        </div>
      </li>
    </Styled.ArticleCardBig>
  );
};

export default ArticleCardBigSkeleton;
