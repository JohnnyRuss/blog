import { CategoryT } from "./category.types";
import { ArticleSchemaT } from "@/utils/validations/articleSchema";

type ArticleT = {
  _id: string;
  author: ArticleAuthorT;
  title: string;
  categories: Array<CategoryT>;
  body: string;
  views: Array<string>;
  likes: Array<string>;
  updatedAt: string;
  createdAt: string;
};

type ArticleAuthorT = {
  _id: string;
  username: string;
  avatar: string;
};

type ArticleShortT = {
  _id: string;
  title: string;
  body: string;
  author: ArticleAuthorT;
  categories: Array<CategoryT>;
  createdAt: string;
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
  articleId: string;
};

type GetAllArticlesArgsT = {
  query: string;
  page: number;
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
  LikeArticleArgsT,
  SaveArticleArgsT,
};
