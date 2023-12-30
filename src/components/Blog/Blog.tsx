import {
  AsideCategories,
  AsideWhoToFollow,
  ArticleCardMedium,
} from "@/components/Layouts";
import * as Styled from "./bog.styled";
import { animateFadeIn } from "@/styles/animations";
import { motion } from "framer-motion";

type BlogT = {};

const Blog: React.FC<BlogT> = () => {
  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-content__box">
        <div className="blog-articles__list">
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
          <motion.div {...animateFadeIn({ once: true, inView: true })}>
            <ArticleCardMedium />
          </motion.div>
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
