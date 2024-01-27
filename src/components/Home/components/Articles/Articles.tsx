import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { animateTop } from "@/styles/animations";
import { useGetRecentArticlesQuery } from "@/hooks/api/articles";

import * as Styled from "./articles.styled";

import {
  SectionTitle,
  ArticleCardBig,
  ArticleCardBigSkeleton,
} from "@/components/Layouts";

const Articles: React.FC = () => {
  const { data, status } = useGetRecentArticlesQuery();

  return (
    <Styled.Articles>
      <SectionTitle title="Recent Posts" />

      <ul className="posts-list">
        {status.loading
          ? Array.from(new Array(4)).map(() => (
              <ArticleCardBigSkeleton key={uuid()} />
            ))
          : data.map((article) => (
              <motion.div
                key={article._id}
                {...animateTop({ inView: true, once: false })}
              >
                <ArticleCardBig article={article} />
              </motion.div>
            ))}
      </ul>
    </Styled.Articles>
  );
};

export default Articles;
