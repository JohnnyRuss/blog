import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { animateFadeIn } from "@/styles/animations";

import {
  AsideCategories,
  AsideWhoToFollow,
  ArticleCardMedium,
} from "@/components/Layouts";
import * as Styled from "./bog.styled";

type BlogT = {};

const Blog: React.FC<BlogT> = () => {
  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-content__box">
        <div className="blog-articles__list">
          {Array.from(new Array(16)).map(() => (
            <motion.div
              {...animateFadeIn({ once: true, inView: true })}
              key={uuid()}
            >
              <ArticleCardMedium />
            </motion.div>
          ))}
        </div>

        <aside className="blog-aside">
          <AsideCategories />

          <AsideWhoToFollow />
        </aside>
      </div>
    </Styled.Blog>
  );
};

export default Blog;
