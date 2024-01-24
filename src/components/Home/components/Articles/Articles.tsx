import { motion } from "framer-motion";

import { homeStore } from "@/store";
import { animateTop } from "@/styles/animations";

import * as Styled from "./articles.styled";

import { SectionTitle, ArticleCardBig } from "@/components/Layouts";

const Articles: React.FC = () => {
  const articles = homeStore.use.recentArticles();

  return (
    <Styled.Articles>
      <SectionTitle title="Recent Posts" />

      <ul className="posts-list">
        {articles.map((article) => (
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
