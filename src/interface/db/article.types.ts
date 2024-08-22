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
  email: string;
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
  likes: Array<string>;
};

// API

type CreateArticleArgsT = ArticleSchemaT;

type UpdateArticleArgsT = {
  articleSlug: string;
  data: ArticleSchemaT;
};

type GetUserArticlesArgsT = {
  username: string;
  limit?: number;
};

type DeleteArticleArgsT = {
  articleSlug: string;
  articleId: string;
};

type GetArticleArgsT = {
  slug: string;
};

type GetAllArticlesArgsT = {
  query?: string;
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
  GetUserArticlesArgsT,
};
