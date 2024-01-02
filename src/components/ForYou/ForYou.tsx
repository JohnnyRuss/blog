import { v4 as uuid } from "uuid";
import { animateTop } from "@/styles/animations";
import { motion } from "framer-motion";

import {
  ArticleCardSmall,
  AsideCategories,
  AsideRecentlySaved,
} from "@/components/Layouts";
import * as Styled from "./forYou.styled";

type ForYouT = {};

const ForYou: React.FC<ForYouT> = () => {
  return (
    <Styled.ForYou>
      <div>Filter</div>
      <div className="for-you__content-box">
        <div className="for-you__articles-list">
          {Array.from(new Array(12)).map(() => (
            <motion.div
              {...animateTop({ inView: true, once: true })}
              key={uuid()}
            >
              <ArticleCardSmall />
            </motion.div>
          ))}
        </div>

        <aside className="for-you__aside">
          <AsideCategories />

          <AsideRecentlySaved />
        </aside>
      </div>
    </Styled.ForYou>
  );
};

export default ForYou;
