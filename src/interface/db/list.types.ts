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
type CreateListArgsT = CreateListSchemaT;

type UpdateListArgsT = { listId: string; data: CreateListSchemaT };

type DeleteListArgsT = { listId: string };

type GetListsArgsT = { userId: string; limit?: number };

type AddToListArgsT = { listId: string; articleId: string };

export type {
  ListT,
  ListShortT,
  // API
  CreateListArgsT,
  UpdateListArgsT,
  DeleteListArgsT,
  AddToListArgsT,
  GetListsArgsT,
};
