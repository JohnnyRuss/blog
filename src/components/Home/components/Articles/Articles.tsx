import * as Styled from "./articles.styled";
import { animateTop, animateLeft, animateRight } from "@/styles/animations";
import { motion } from "framer-motion";

import { SectionTitle, ArticleCard } from "@/components/Layouts";

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
          <ArticleCard />
        </motion.div>

        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCard />
        </motion.div>

        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCard />
        </motion.div>

        <motion.div
          whileInView="onscreen"
          {...animateTop({ inView: true, once: false })}
        >
          <ArticleCard />
        </motion.div>
      </ul>

      <div className="pagination-box">
        <motion.button
          whileInView="onscreen"
          {...animateLeft({ inView: true, once: true })}
          className="pagination-box__btn"
        >
          Prev
        </motion.button>

        <motion.button
          whileInView="onscreen"
          {...animateRight({ inView: true, once: true })}
          className="pagination-box__btn"
        >
          Next
        </motion.button>
      </div>
    </Styled.Articles>
  );
};

export default Articles;
