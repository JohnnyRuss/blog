import { CategoryT } from "@/interface/db/category.types";
import { ArticleShortT } from "@/interface/db/article.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type HomeStateT = {
  status: LoadingStatusT;
  categories: Array<CategoryT>;
  topArticle: ArticleShortT;
  recentArticles: Array<ArticleShortT>;
  popularArticles: Array<ArticleShortT>;
  editorsPick: Array<ArticleShortT>;
};

type HomeActionsT = {
  getHome: () => Promise<void>;
};

type HomeStoreT = HomeStateT & HomeActionsT;

export type { HomeStateT, HomeStoreT };
