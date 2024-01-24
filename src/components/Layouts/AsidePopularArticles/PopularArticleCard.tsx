import { useTheme } from "styled-components";
import { motion } from "framer-motion";

import { getTimeString } from "@/utils";
import { animateLeft } from "@/styles/animations";

import { LineClamp, CategoryChip } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type PopularArticleCardT = {
  article: ArticleShortT;
};

const PopularArticleCard: React.FC<PopularArticleCardT> = ({ article }) => {
  const theme = useTheme();
  const category = article.categories[0];

  return (
    <motion.li
      className="popular-item"
      {...animateLeft({ inView: true, once: true })}
    >
      <CategoryChip
        size="sm"
        title={category?.title}
        bgColor={category?.color}
      />

      <LineClamp
        clamp={2}
        sx={{
          fontSize: theme.fontSize.sm,
          color:
            theme.mode === "dark" ? theme.colors.gray : theme.colors.gray_dark,
        }}
        text={article.title}
      />

      <div className="popular-item__footer">
        <span className="popular-item__footer-author">
          {article.author.username}
        </span>
        &mdash;
        <span className="popular-item__footer-date">
          {getTimeString(article.createdAt)}
        </span>
      </div>
    </motion.li>
  );
};

export default PopularArticleCard;
