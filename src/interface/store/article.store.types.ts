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
} from "@/interface/db/article.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { CategoryT } from "@/interface/db/category.types";

type ArticleStateT = {
  categorySuggestions: Array<CategoryT>;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;

  // Articles
  readAllStatus: LoadingStatusT;
  hasMore: boolean;
  currentPage: number;
  articles: Array<ArticleShortT>;

  // Article
  article: ArticleT;
  readStatus: LoadingStatusT;

  // Top Article
  topArticleStatus: LoadingStatusT;
  topArticle: ArticleShortT;

  // Related Articles
  relatedStatus: LoadingStatusT;
  relatedArticles: Array<ArticleShortT>;

  // Popular Articles
  popularStatus: LoadingStatusT;
  popularArticles: Array<ArticleShortT>;

  // EditorPick Articles
  editorPickedStatus: LoadingStatusT;
  editorPickedArticles: Array<ArticleShortT>;

  // Recent Articles
  recentStatus: LoadingStatusT;
  recentArticles: Array<ArticleShortT>;

  lists: Array<{}>;
};

type ArticleActionsT = {
  // CUD
  getCategorySuggestions: () => Promise<void>;
  create: (args: CreateArticleArgsT) => Promise<void>;
  update: (args: UpdateArticleArgsT) => Promise<void>;
  delete: (args: DeleteArticleArgsT) => Promise<void>;

  // Articles
  cleanUpArticles: () => void;
  getAll: (args: GetAllArticlesArgsT) => Promise<void>;
  getAllPaginated: (args: GetAllArticlesArgsT) => Promise<void>;

  // Article
  cleanUpArticle: () => void;
  get: (args: GetArticleArgsT) => Promise<void>;

  // Top Article
  cleanUpTopArticle: () => void;
  getTopArticle: () => Promise<void>;

  // Related Articles
  cleanUpRelatedArticles: () => void;
  getRelatedArticles: (args: GetArticleArgsT) => Promise<void>;

  // Popular Articles
  cleanUpPopularArticles: () => void;
  getPopularArticles: () => Promise<void>;

  // Editor Picked Articles
  cleanUpEditorPickedArticles: () => void;
  getEditorPickedArticles: () => Promise<void>;

  // Recent Articles
  cleanUpRecentArticles: () => void;
  getRecentArticles: () => Promise<void>;

  // Others
  like: (args: LikeArticleArgsT) => Promise<void>;
};

type ArticleStoreT = ArticleStateT & ArticleActionsT;

export type { ArticleStateT, ArticleStoreT };
