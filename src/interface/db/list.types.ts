import { UserT } from "./user.types";
import { ArticleShortT } from "./article.types";

type ListT = {
  _id: string;
  author: UserT;
  title: string;
  description: string;
  articles: Array<ArticleShortT>;
  privacy: string;
};

type ListShortT = {
  author: string;
  title: string;
  description: string;
  articles: Array<string>;
  privacy: string;
  _id: string;
};

// API
type GetListsAgsT = { userId: string };

type AddToListAgsT = { listId: string; articleId: string };

type CreateListAgsT = { title: string; description: string };

export type {
  ListT,
  ListShortT,
  // API
  AddToListAgsT,
  GetListsAgsT,
  CreateListAgsT,
};
