import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { getTimeString } from "@/utils";
import { animateLeft } from "@/styles/animations";
import { DYNAMIC_ROUTES } from "@/config/paths";

import { LineClamp, CategoryChip } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type PopularArticleCardT = {
  article: ArticleShortT;
};

const PopularArticleCard: React.FC<PopularArticleCardT> = ({ article }) => {
  const theme = useTheme();
  const category = article.categories[0];

  const navigate = useNavigate();

  const onGoToUser = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(DYNAMIC_ROUTES.profile_page(article.author.username));
  };

  return (
    <motion.li {...animateLeft({ inView: true, once: true })}>
      <Link
        className="popular-item"
        to={DYNAMIC_ROUTES.article_page(article.slug)}
      >
        <CategoryChip size="sm" category={category} />

        <LineClamp
          clamp={2}
          sx={{
            fontSize: theme.fontSize.sm,
            color:
              theme.mode === "dark"
                ? theme.colors.gray
                : theme.colors.gray_dark,
          }}
          text={article.title}
        />

        <div className="popular-item__footer">
          <div className="popular-item__footer-author" onClick={onGoToUser}>
            {article.author.fullname}
          </div>
          &mdash;
          <span className="popular-item__footer-date">
            {getTimeString(article.createdAt)}
          </span>
        </div>
      </Link>
    </motion.li>
  );
};

export default PopularArticleCard;
