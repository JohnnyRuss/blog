import { ArticleShortT } from "../db/article.types";
import { LoadingStatusT } from "./common.types";

type HomeStateT = {
  status: LoadingStatusT;
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
