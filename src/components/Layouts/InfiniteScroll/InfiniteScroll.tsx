import styled from "styled-components";
import Infinite from "react-infinite-scroll-component";

import { Spinner } from "@/components/Layouts";

type InfiniteScrollT = {
  total: number;
  onNext: () => void;
  hasMore: boolean;
  children: React.ReactNode;
  height?: string;
  showLastMessage?: boolean;
  fallBack?: React.ReactNode;
};

const StyledLastLine = styled.p`
  width: 100%;
  flex: 1;
  grid-column: 1/-1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfiniteScroll: React.FC<InfiniteScrollT> = ({
  total,
  onNext,
  hasMore,
  children,
  height,
  fallBack,
  showLastMessage = true,
}) => {
  return (
    <Infinite
      dataLength={total}
      next={onNext}
      hasMore={hasMore}
      loader={
        fallBack ? (
          fallBack
        ) : (
          <StyledLastLine>
            <Spinner />
          </StyledLastLine>
        )
      }
      {...(height ? { height } : {})}
      {...(showLastMessage
        ? {
            endMessage: <StyledLastLine>There are no more data</StyledLastLine>,
          }
        : {})}
    >
      {children}
    </Infinite>
  );
};

export default InfiniteScroll;
