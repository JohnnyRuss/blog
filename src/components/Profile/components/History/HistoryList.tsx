import { memo } from "react";
import { motion } from "framer-motion";

import { generateArray, getTimeString } from "@/utils";
import { useGetUserHistoryQuery } from "@/hooks/api/history";
import { useGetSavedArticlesIdsQuery } from "@/hooks/api/lists";

import {
  ErrorMessage,
  EmptyMessage,
  InfiniteScroll,
  ArticleCardSmall,
  ArticleCardSmallSkeleton,
} from "@/components/Layouts";
import * as Styled from "./historyList.styled";
import { animateTop } from "@/styles/animations";

type HistoryListT = {
  limit?: number;
};

const HistoryList: React.FC<HistoryListT> = memo(({ limit }) => {
  useGetSavedArticlesIdsQuery();

  const { data, status, hasMore, getHistoryQuery, total } =
    useGetUserHistoryQuery(limit);

  const formatDate = (group: { day?: number; month: number; year: number }) =>
    getTimeString(
      new Date(
        `${group.month}-${group.day ? group.day : "01"}-${group.year}`
      ).toString(),
      group.day ? "dayMonthConfig" : "yearMonthConfig"
    );

  return (
    <Styled.HistoryList>
      {status.loading ? (
        <div className="loading-skeleton">
          {generateArray(limit || 6).map((id) => (
            <ArticleCardSmallSkeleton key={id} />
          ))}
        </div>
      ) : status.status === "SUCCESS" ? (
        <InfiniteScroll
          total={total}
          hasMore={limit ? false : hasMore}
          onNext={getHistoryQuery}
          showLastMessage={limit || data.length === 0 ? false : true}
          fallBack={
            data.length > 0 ? (
              generateArray(2).map((id) => (
                <ArticleCardSmallSkeleton key={id} />
              ))
            ) : (
              <></>
            )
          }
        >
          {data.map(({ group, articles }, index) => (
            <div
              className="history-group--box"
              key={`${group.day}-${group.month}-${group.year}--${index}`}
            >
              <span className="history-group--box__date">
                {formatDate(group)}
              </span>

              <div className="history-group--box__list">
                {articles.map((article, index) => (
                  <motion.div
                    {...animateTop({ inView: true, once: true })}
                    key={`history-${article._id}--${index}`}
                  >
                    <ArticleCardSmall
                      article={article}
                      showLikeButton={false}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </InfiniteScroll>
      ) : (
        <ErrorMessage message={status.message} align="center" size="md" />
      )}

      {data.length === 0 && (
        <EmptyMessage message="You have not read any article yet" />
      )}
    </Styled.HistoryList>
  );
});

export default HistoryList;
