import Skeleton from "react-loading-skeleton";
import { AuthorIdentifierSkeleton } from "@/components/Layouts";
import * as Styled from "./styles/listHeader.styled";

const ListHeadSkeleton: React.FC = () => {
  return (
    <Styled.ListHeader className="list-header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AuthorIdentifierSkeleton showDateSkeleton={false} />

        <Skeleton width={70} height={35} borderRadius={50} />
      </div>

      <div className="list-header__sub-wrapper">
        <div style={{ width: "100%" }}>
          <Skeleton width={120} />
          <Skeleton width="90%" />
          <Skeleton width="70%" />
          <Skeleton width={90} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "1rem",
          }}
        >
          <Skeleton circle={true} width={30} height={30} />
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Skeleton circle={true} width={30} height={30} />
            <Skeleton circle={true} width={30} height={30} />
          </div>
        </div>
      </div>
    </Styled.ListHeader>
  );
};

export default ListHeadSkeleton;
