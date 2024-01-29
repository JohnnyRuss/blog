import Skeleton from "react-loading-skeleton";

import * as Styled from "./followCard.styled";

const FollowCardSkeleton: React.FC = () => {
  return (
    <Styled.FollowCard>
      <Skeleton circle={true} width={50} height={50} />

      <div className="follow-card__content">
        <Skeleton width="120px" />

        <Skeleton width="90%" height="8px" />
        <Skeleton width="40%" height="8px" />
      </div>

      <Skeleton width="80px" height="42px" borderRadius="50px" />
    </Styled.FollowCard>
  );
};

export default FollowCardSkeleton;
