import { memo } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useGetUserHistoryQuery } from "@/hooks/api/history";

import {
  InfiniteScroll,
  ArticleCardSmall,
  ArticleCardSmallSkeleton,
} from "@/components/Layouts";

type HistoryListT = {
  limit?: number;
};

const StyledList = styled.div`
  .loading-skeleton,
  .infinite-scroll-component {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

const HistoryList: React.FC<HistoryListT> = memo(({ limit }) => {
  const { data, status, hasMore, getHistoryQuery, total } =
    useGetUserHistoryQuery(limit);

  return (
    <StyledList>
      {status.loading && (
        <div className="loading-skeleton">
          {generateArray(limit || 6).map(() => (
            <ArticleCardSmallSkeleton key={uuid()} />
          ))}
        </div>
      )}

      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={limit ? false : hasMore}
          onNext={getHistoryQuery}
          showLastMessage={limit ? false : true}
          fallBack={generateArray(2).map(() => (
            <ArticleCardSmallSkeleton key={uuid()} />
          ))}
        >
          {data.map((article, index) => (
            <motion.div
              {...animateTop({ inView: true, once: true })}
              key={`history-${article._id}--${index}`}
            >
              <ArticleCardSmall article={article} />
            </motion.div>
          ))}
        </InfiniteScroll>
      )}
    </StyledList>
  );
});

export default HistoryList;
