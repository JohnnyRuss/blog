import Skeleton from "react-loading-skeleton";
import * as Styled from "./styles/cardHead.styled";

const CardHeadSkeleton: React.FC = () => {
  return (
    <Styled.CardHead>
      <Skeleton width="25px" height="25px" circle={true} />

      <p className="card-head__user">
        <Skeleton width="120px" />
      </p>
    </Styled.CardHead>
  );
};

export default CardHeadSkeleton;
