import Skeleton from "react-loading-skeleton";

import * as Styled from "./styles/articleHead.styled";
import { AuthorIdentifierSkeleton } from "@/components/Layouts";

const ArticleHeadSkeleton: React.FC = () => {
  return (
    <Styled.ArticleHead>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <AuthorIdentifierSkeleton />

        <Skeleton height={40} width={120} borderRadius={5} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "3rem",
          width: "100%",
        }}
      >
        <Skeleton height={40} width={120} borderRadius={55} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "3rem",
            marginLeft: "auto",
          }}
        >
          <Skeleton circle={true} height={40} width={40} borderRadius={100} />

          <Skeleton circle={true} height={40} width={40} borderRadius={100} />

          <Skeleton circle={true} height={40} width={40} borderRadius={100} />
        </div>
      </div>

      <Skeleton count={2} height={30} />
    </Styled.ArticleHead>
  );
};

export default ArticleHeadSkeleton;
