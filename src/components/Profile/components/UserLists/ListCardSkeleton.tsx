import { v4 as uuid } from "uuid";
import Skeleton from "react-loading-skeleton";

import * as Styled from "./styles/listCard.styled";

const ListCardSkeleton: React.FC = () => {
  return (
    <Styled.ListCard>
      <div className="list-card__content">
        <div className="list-card__content-user">
          <Skeleton width={25} height={25} circle={true} />

          <Skeleton width={120} />
        </div>

        <Skeleton width="70%" height="20px" />

        <Skeleton width="100%" count={2} />

        <Skeleton width={100} />
      </div>

      <div className="list-card__assets">
        {Array.from(new Array(3)).map(() => (
          <figure className="list-card__assets-fig" key={uuid()}>
            <Skeleton
              width="100%"
              height="100%"
              style={{ display: "inline-block" }}
            />
          </figure>
        ))}
      </div>
    </Styled.ListCard>
  );
};

export default ListCardSkeleton;
