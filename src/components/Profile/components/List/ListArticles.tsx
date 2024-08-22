import { memo } from "react";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useGetListArticlesQuery } from "@/hooks/api/lists";

import {
  InfiniteScroll,
  ArticleCardSmall,
  ErrorMessage,
  ArticleCardSmallSkeleton,
} from "@/components/Layouts";
import * as Styled from "./styles/listArticles.styled";

const ListArticles: React.FC = memo(() => {
  const { data, status, hasMore, total, getPaginatedData } =
    useGetListArticlesQuery();

  return (
    <Styled.ListArticles>
      {status.loading && (
        <div className="loading-skeleton">
          {generateArray(6).map((id) => (
            <ArticleCardSmallSkeleton key={id} />
          ))}
        </div>
      )}
      {status.status === "SUCCESS" ? (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getPaginatedData}
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
      ) : status.status === "FAIL" ? (
        <ErrorMessage message={status.message} align="center" />
      ) : (
        <></>
      )}
    </Styled.ListArticles>
  );
});

export default ListArticles;
