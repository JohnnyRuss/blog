import * as Styled from "./articles.styled";
import { animateTop } from "@/styles/animations";
import { motion } from "framer-motion";

import { SectionTitle, ArticleCardBig } from "@/components/Layouts";

type ArticlesT = {};

const Articles: React.FC<ArticlesT> = () => {
  return (
    <Styled.Articles>
      <SectionTitle title="Recent Posts" />

      <ul className="posts-list">
        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCardBig />
        </motion.div>

        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCardBig />
        </motion.div>

        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCardBig />
        </motion.div>

        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCardBig />
        </motion.div>
      </ul>
    </Styled.Articles>
  );
};

export default Articles;
