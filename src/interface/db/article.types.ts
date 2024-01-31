import { CategoryT } from "./category.types";
import { ArticleSchemaT } from "@/utils/validations/articleSchema";

type ArticleT = {
  _id: string;
  slug: string;
  author: ArticleAuthorT;
  title: string;
  categories: Array<CategoryT>;
  body: string;
  views: number;
  likes: Array<string>;
  updatedAt: string;
  createdAt: string;
};

type ArticleAuthorT = {
  _id: string;
  username: string;
  fullname: string;
  avatar: string;
};

type ArticleShortT = {
  _id: string;
  slug: string;
  title: string;
  body: string;
  author: ArticleAuthorT;
  categories: Array<CategoryT>;
  createdAt: string;
  picked: boolean;
};

// API

type CreateArticleArgsT = ArticleSchemaT;

type UpdateArticleArgsT = {
  articleId: string;
  data: ArticleSchemaT;
};

type DeleteArticleArgsT = {
  articleId: string;
};

type GetArticleArgsT = {
  slug: string;
};

type GetAllArticlesArgsT = {
  query: string;
  page: number;
};

type GetAllArticlesResponseT = {
  data: Array<ArticleShortT>;
  currentPage: number;
  hasMore: boolean;
};

type LikeArticleArgsT = {
  articleId: string;
};

type SaveArticleArgsT = {
  articleId: string;
  listId: string;
};

export type {
  ArticleT,
  ArticleAuthorT,
  ArticleShortT,
  // API
  CreateArticleArgsT,
  UpdateArticleArgsT,
  DeleteArticleArgsT,
  GetArticleArgsT,
  GetAllArticlesArgsT,
  GetAllArticlesResponseT,
  LikeArticleArgsT,
  SaveArticleArgsT,
};
