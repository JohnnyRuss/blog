import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import { getTimeString } from "@/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { animateLeft } from "@/styles/animations";

import { CategoryChip, LineClamp } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";
import React from "react";

type EditorPickedArticleCardT = {
  article: ArticleShortT;
};

const EditorPickedArticleCard: React.FC<EditorPickedArticleCardT> = ({
  article,
}) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const category = article.categories[0];

  const onNavigateToAuthor = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(DYNAMIC_ROUTES.profile_page(article.author.username));
  };

  return (
    <motion.li {...animateLeft({ inView: true, once: true })}>
      <Link
        className="editor-pick__item"
        to={DYNAMIC_ROUTES.article_page(article.slug)}
      >
        <figure className="editor-pick__item-fig">
          <img
            width={70}
            height={70}
            src={article.author.avatar}
            alt={article.author.username}
          />
        </figure>

        <div className="editor-pick__item-content">
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

          <div className="editor-pick__item-footer">
            <span
              onClick={onNavigateToAuthor}
              className="editor-pick__item-footer--author"
            >
              {article.author.fullname}
            </span>
            &mdash;
            <span className="editor-pick__item-footer--date">
              {getTimeString(article.createdAt)}
            </span>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default EditorPickedArticleCard;
