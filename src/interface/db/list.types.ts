import { UserT } from "./user.types";
import { ArticleShortT } from "./article.types";
import { CreateListSchemaT } from "@/utils/validations/createListSchema";

type ListT = {
  _id: string;
  author: UserT;
  title: string;
  description: string;
  articles: Array<{ savedAt: string; article: ArticleShortT }>;
  privacy: string;
  createdAt: string;
};

type ListShortT = {
  author: string;
  title: string;
  description: string;
  articles: Array<{ savedAt: string; article: string }>;
  privacy: string;
  _id: string;
};

// API
type GetListsAgsT = { userId: string; limit?: number };

type AddToListAgsT = { listId: string; articleId: string };

type CreateListAgsT = CreateListSchemaT;

export type {
  ListT,
  ListShortT,
  // API
  AddToListAgsT,
  GetListsAgsT,
  CreateListAgsT,
};
