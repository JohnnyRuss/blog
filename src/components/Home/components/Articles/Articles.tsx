import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useGetRecentArticlesQuery } from "@/hooks/api/articles";

import {
  ErrorMessage,
  SectionTitle,
  ArticleCardBig,
  ArticleCardBigSkeleton,
} from "@/components/Layouts";
import * as Styled from "./articles.styled";

const Articles: React.FC = () => {
  const { data, status } = useGetRecentArticlesQuery();

  return (
    <Styled.Articles>
      <SectionTitle title="Recent Posts" />

      <ul className="posts-list">
        {status.loading ? (
          generateArray(4).map((id) => <ArticleCardBigSkeleton key={id} />)
        ) : status.status === "SUCCESS" ? (
          data.map((article) => (
            <motion.div
              key={article._id}
              {...animateTop({ inView: true, once: false })}
            >
              <ArticleCardBig article={article} />
            </motion.div>
          ))
        ) : (
          <ErrorMessage message={status.message} align="center" size="md" />
        )}
      </ul>
    </Styled.Articles>
  );
};

export default Articles;
