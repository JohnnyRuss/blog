import { motion } from "framer-motion";

import { animateFadeIn } from "@/styles/animations";
import { useReadAllArticlesQuery } from "@/hooks/api/articles";

import {
  AsideCategories,
  AsideWhoToFollow,
  ArticleCardMedium,
  InfiniteScroll,
  StandSpinner,
} from "@/components/Layouts";
import * as Styled from "./bog.styled";

type BlogT = {};

const Blog: React.FC<BlogT> = () => {
  const { data, getArticlesQuery, hasMore, status, total } =
    useReadAllArticlesQuery();

  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-content__box">
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getArticlesQuery}
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

        <aside className="blog-aside">
          <AsideCategories />

          <AsideWhoToFollow />
        </aside>
      </div>

      {status.loading && <StandSpinner />}
    </Styled.Blog>
  );
};

export default Blog;
