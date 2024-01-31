import { CategoryT } from "@/interface/db/category.types";
import { ArticleShortT } from "@/interface/db/article.types";
import { LoadingStatusT } from "./common.types";

type DashboardStateT = {
  categoriesStatus: LoadingStatusT;
  categories: Array<CategoryT>;
  articlesStatus: LoadingStatusT;
  articles: Array<ArticleShortT>;
};

type DashboardActionsT = {
  getArticles: () => Promise<void>;
  cleanUArticles: () => void;
  pickArticle: (args: { articleId: string; picked: boolean }) => Promise<void>;
  getCategories: () => Promise<void>;
  cleanUpCategories: () => void;
  uploadCategoryThumbnail: (args: {
    categoryId: string;
    thumbnail: File;
  }) => Promise<void>;
};

type DashboardStoreT = DashboardStateT & DashboardActionsT;

export type { DashboardStateT, DashboardStoreT };
