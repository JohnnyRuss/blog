import { LoadingStatusT } from "@/interface/store/common.types";
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
  SaveArticleArgsT,
} from "@/interface/db/article.types";

type ArticleStateT = {
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;
  readStatus: LoadingStatusT;
  saveStatus: LoadingStatusT;
  hasMore: boolean;
  currentPage: number;
  articles: Array<ArticleShortT>;
  article: ArticleT;
  lists: Array<{}>;
};

type ArticleActionsT = {
  create: (args: CreateArticleArgsT) => Promise<void>;
  update: (args: UpdateArticleArgsT) => Promise<void>;
  delete: (args: DeleteArticleArgsT) => Promise<void>;
  get: (args: GetArticleArgsT) => Promise<void>;
  cleanUpArticle: () => void;
  getAll: (args: GetAllArticlesArgsT) => Promise<void>;
  getAllPaginated: (args: GetAllArticlesArgsT) => Promise<void>;
  cleanUpArticles: () => void;
  like: (args: LikeArticleArgsT) => Promise<void>;
  getLists: () => Promise<void>;
  save: (args: SaveArticleArgsT) => Promise<void>;
};

type ArticleStoreT = ArticleStateT & ArticleActionsT;

export type { ArticleStateT, ArticleStoreT };
