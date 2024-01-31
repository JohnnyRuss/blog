import { memo } from "react";
// import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { animateTop } from "@/styles/animations";
import { useReadAllArticlesQuery } from "@/hooks/api/articles";

import { InfiniteScroll, ArticleCardSmall } from "@/components/Layouts";

const ArticlesList: React.FC = memo(() => {
  const { data, getArticlesQuery, hasMore, status, total } =
    useReadAllArticlesQuery("userbased=1&sort=-common,-views,-createdAt");

  return (
    <div className="for-you__articles-list">
      {/* {status.loading && (
        <div className="loading-skeleton">
          {Array.from(new Array(6)).map(() => (
            <ArticleCardMediumSkeleton key={uuid()} />
          ))}
        </div>
      )} */}

      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getArticlesQuery}
          // fallBack={Array.from(new Array(2)).map(() => (
          //   <ArticleCardMediumSkeleton key={uuid()} />
          // ))}
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