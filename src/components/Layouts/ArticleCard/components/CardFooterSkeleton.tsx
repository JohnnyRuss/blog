import Skeleton from "react-loading-skeleton";
import * as Styled from "./styles/cardFooter.styled";

const CardFooterSkeleton: React.FC = () => {
  return (
    <Styled.CardFooter>
      <div>
        <Skeleton width="25px" height="25px" circle={true} />
      </div>
      <div>
        <Skeleton width="25px" height="25px" circle={true} />
      </div>
      <div style={{ marginLeft: "auto" }}>
        <Skeleton width="25px" height="25px" circle={true} />
      </div>
    </Styled.CardFooter>
  );
};

export default CardFooterSkeleton;
