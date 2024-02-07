import { memo } from "react";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useReadAllArticlesQuery } from "@/hooks/api/articles";

import {
  ErrorMessage,
  InfiniteScroll,
  ArticleCardSmall,
  ArticleCardSmallSkeleton,
} from "@/components/Layouts";

const ArticlesList: React.FC = memo(() => {
  const { data, getArticlesQuery, hasMore, status, total } =
    useReadAllArticlesQuery("userbased=1&sort=-common,-views,-createdAt");

  return (
    <div className="for-you__articles-list">
      {status.loading ? (
        <div className="loading-skeleton">
          {generateArray(6).map((id) => (
            <ArticleCardSmallSkeleton key={id} />
          ))}
        </div>
      ) : status.status === "SUCCESS" ? (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getArticlesQuery}
          fallBack={generateArray(2).map((id) => (
            <ArticleCardSmallSkeleton key={id} />
          ))}
        >
          {data.map((article) => (
            <motion.div
              {...animateTop({ inView: true, once: true })}
              key={article._id}
            >
              <ArticleCardSmall article={article} />
            </motion.div>
          ))}
        </InfiniteScroll>
      ) : (
        <ErrorMessage message={status.message} align="center" size="md" />
      )}
    </div>
  );
});

export default ArticlesList;
