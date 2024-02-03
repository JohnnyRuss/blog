import { memo } from "react";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useReadAllArticlesQuery } from "@/hooks/api/articles";

import {
  InfiniteScroll,
  ArticleCardSmall,
  ArticleCardSmallSkeleton,
} from "@/components/Layouts";

const ArticlesList: React.FC = memo(() => {
  const { data, getArticlesQuery, hasMore, status, total } =
    useReadAllArticlesQuery("userbased=1&sort=-common,-views,-createdAt");

  return (
    <div className="for-you__articles-list">
      {status.loading && (
        <div className="loading-skeleton">
          {generateArray(6).map(() => (
            <ArticleCardSmallSkeleton key={uuid()} />
          ))}
        </div>
      )}

      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getArticlesQuery}
          fallBack={generateArray(2).map(() => (
            <ArticleCardSmallSkeleton key={uuid()} />
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
      )}
    </div>
  );
});

export default ArticlesList;
