import Skeleton from "react-loading-skeleton";
import * as Styled from "./identifier.styled";

type AuthorIdentifierSkeletonT = {
  showDateSkeleton?: boolean;
};

const AuthorIdentifierSkeleton: React.FC<AuthorIdentifierSkeletonT> = ({
  showDateSkeleton = true,
}) => {
  return (
    <Styled.AuthorIdentifier>
      <Skeleton circle={true} width="40px" height="40px" />

      <div className="user-avatar--details">
        <Skeleton width="150px" />

        {showDateSkeleton && <Skeleton width="100px" />}
      </div>
    </Styled.AuthorIdentifier>
  );
};

export default AuthorIdentifierSkeleton;
