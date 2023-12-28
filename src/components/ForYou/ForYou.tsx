import { animateTop } from "@/styles/animations";
import { motion } from "framer-motion";

import {
  ArticleCardSmall,
  PopularArticles,
  Categories,
  EditorPick,
} from "@/components/Layouts";
import * as Styled from "./forYou.styled";

type ForYouT = {};

const ForYou: React.FC<ForYouT> = () => {
  return (
    <Styled.ForYou>
      <div>Filter</div>
      <div className="for-you__content-box">
        <div className="for-you__articles-list">
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
          <motion.div
            whileInView="onscreen"
            {...animateTop({ inView: true, once: true })}
          >
            <ArticleCardSmall />
          </motion.div>
        </div>
        <aside className="for-you__aside">
          <PopularArticles />

          <div className="for-you__aside-sticky">
            <Categories />

            <EditorPick />
          </div>
        </aside>
      </div>
    </Styled.ForYou>
  );
};

export default ForYou;
