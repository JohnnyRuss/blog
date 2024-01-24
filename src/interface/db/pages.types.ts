import { ArticleShortT } from "@/interface/db/article.types";
import { CategoryT } from "@/interface/db/category.types";

type GetHomePageResponseT = {
  categories: Array<CategoryT>;
  topArticle: ArticleShortT;
  recentArticles: Array<ArticleShortT>;
  popularArticles: Array<ArticleShortT>;
  editorsPick: Array<ArticleShortT>;
};

export type { GetHomePageResponseT };
