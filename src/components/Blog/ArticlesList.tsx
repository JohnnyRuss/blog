import { memo } from "react";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { animateFadeIn } from "@/styles/animations";
import { useReadAllArticlesQuery } from "@/hooks/api/articles";

import {
  InfiniteScroll,
  ArticleCardMedium,
  ArticleCardMediumSkeleton,
} from "@/components/Layouts";

const ArticlesList: React.FC = memo(() => {
  const { data, getArticlesQuery, hasMore, status, total } =
    useReadAllArticlesQuery();

  return (
    <div className="blog-list__wrapper">
      {status.loading && (
        <div className="loading-skeleton">
          {Array.from(new Array(6)).map(() => (
            <ArticleCardMediumSkeleton key={uuid()} />
          ))}
        </div>
      )}

      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getArticlesQuery}
          fallBack={Array.from(new Array(2)).map(() => (
            <ArticleCardMediumSkeleton key={uuid()} />
          ))}
        >
          {data.map((article) => (
            <motion.div
              key={article._id}
              {...animateFadeIn({ once: true, inView: true })}
            >
              <ArticleCardMedium article={article} />
            </motion.div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
});

export default ArticlesList;
