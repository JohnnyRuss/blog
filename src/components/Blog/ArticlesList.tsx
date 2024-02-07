import { memo } from "react";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateFadeIn } from "@/styles/animations";
import { useReadAllArticlesQuery } from "@/hooks/api/articles";

import {
  ErrorMessage,
  InfiniteScroll,
  ArticleCardMedium,
  ArticleCardMediumSkeleton,
} from "@/components/Layouts";

const ArticlesList: React.FC = memo(() => {
  const { data, getArticlesQuery, hasMore, status, total } =
    useReadAllArticlesQuery("sort=-createdAt,-views");

  return (
    <div className="blog-list__wrapper">
      {status.loading ? (
        <div className="loading-skeleton">
          {generateArray(6).map((id) => (
            <ArticleCardMediumSkeleton key={id} />
          ))}
        </div>
      ) : status.status === "SUCCESS" ? (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getArticlesQuery}
          fallBack={generateArray(2).map((id) => (
            <ArticleCardMediumSkeleton key={id} />
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
      ) : (
        <ErrorMessage message={status.message} align="center" size="md" />
      )}
    </div>
  );
});

export default ArticlesList;
