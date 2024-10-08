import {
  ArticleShortT,
  ArticleT,
  // API
  CreateArticleArgsT,
  UpdateArticleArgsT,
  DeleteArticleArgsT,
  GetArticleArgsT,
  GetAllArticlesArgsT,
  LikeArticleArgsT,
  GetUserArticlesArgsT,
} from "@/interface/db/article.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { CategoryT } from "@/interface/db/category.types";

type ArticleStateT = {
  // ========== CUD ==========
  categorySuggestions: Array<CategoryT>;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT & { articleId: string };

  // ========== Articles ==========
  readAllStatus: LoadingStatusT;
  hasMore: boolean;
  currentPage: number;
  articles: Array<ArticleShortT>;

  // ========== Article ==========
  article: ArticleT;
  readStatus: LoadingStatusT;

  // ========== Top Article ==========
  topArticleStatus: LoadingStatusT;
  topArticle: Omit<ArticleShortT, "likes">;

  // ========== Related Articles ==========
  relatedStatus: LoadingStatusT;
  relatedArticles: Array<ArticleShortT>;

  // ========== Popular Articles ==========
  popularStatus: LoadingStatusT;
  popularArticles: Array<ArticleShortT>;

  // ========== Editor Picked Articles ==========
  editorPickedStatus: LoadingStatusT;
  editorPickedArticles: Array<ArticleShortT>;

  // ========== Recent Articles ==========
  recentStatus: LoadingStatusT;
  recentArticles: Array<ArticleShortT>;

  // ========== Others ==========
  lists: Array<{}>;
};

type ArticleActionsT = {
  // ========== CUD ==========
  getCategorySuggestions: () => Promise<void>;
  cleanUpSuggestions: () => void;
  create: (args: CreateArticleArgsT) => Promise<void>;
  update: (args: UpdateArticleArgsT) => Promise<void>;
  delete: (args: DeleteArticleArgsT & { articleId: string }) => Promise<void>;

  // ========== Articles ==========
  cleanUpArticles: () => void;
  getAll: (args: GetAllArticlesArgsT) => Promise<void>;
  getAllPaginated: (args: GetAllArticlesArgsT) => Promise<void>;

  // ========== Article ==========
  cleanUpArticle: () => void;
  get: (args: GetArticleArgsT) => Promise<void>;

  // ========== Top Article ==========
  cleanUpTopArticle: () => void;
  getTopArticle: () => Promise<void>;

  // ========== Related Articles ==========
  cleanUpRelatedArticles: () => void;
  getRelatedArticles: (args: GetArticleArgsT) => Promise<void>;

  // ========== Popular Articles ==========
  cleanUpPopularArticles: () => void;
  getPopularArticles: () => Promise<void>;

  // ========== Editor Picked Articles ==========
  cleanUpEditorPickedArticles: () => void;
  getEditorPickedArticles: () => Promise<void>;

  // ========== Recent Articles ==========
  cleanUpRecentArticles: () => void;
  getRecentArticles: () => Promise<void>;

  // ========== User Articles ==========
  getUserArticles: (args: GetUserArticlesArgsT) => Promise<void>;
  cleanUpUserArticles: () => void;

  // ========== Others ==========
  like: (args: LikeArticleArgsT) => Promise<void>;
};

type ArticleStoreT = ArticleStateT & ArticleActionsT;

export type { ArticleStateT, ArticleStoreT };
