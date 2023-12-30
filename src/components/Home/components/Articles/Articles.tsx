import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { animateTop } from "@/styles/animations";

import * as Styled from "./articles.styled";

import { SectionTitle, ArticleCardBig } from "@/components/Layouts";

type ArticlesT = {};

const Articles: React.FC<ArticlesT> = () => {
  return (
    <Styled.Articles>
      <SectionTitle title="Recent Posts" />

      <ul className="posts-list">
        {Array.from(new Array(4)).map(() => (
          <motion.div
            {...animateTop({ inView: true, once: false })}
            key={uuid()}
          >
            <ArticleCardBig />
          </motion.div>
        ))}
      </ul>
    </Styled.Articles>
  );
};

export default Articles;
