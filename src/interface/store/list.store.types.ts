import {
  ListShortT,
  ListT,
  // API
  GetListsAgsT,
  AddToListAgsT,
  CreateListAgsT,
} from "@/interface/db/list.types";
import { ArticleShortT } from "@/interface/db/article.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type ListStateT = {
  // Lists
  listsStatus: LoadingStatusT;
  lists: Array<ListT>;
  // Add To List
  listsToAddStatus: LoadingStatusT;
  listsToAdd: Array<ListShortT>;
  createListStatus: LoadingStatusT;
  //  Saved Articles
  savedStatus: LoadingStatusT;
  savedArticles: Array<ArticleShortT>;
};

type ListActionsT = {
  createList: (args: CreateListAgsT) => Promise<void>;
  // Add To List
  getListsToAdd: () => Promise<void>;
  addToList: (args: AddToListAgsT) => Promise<void>;
  cleanUpListsToAdd: () => void;
  // Lists
  getLists: (args: GetListsAgsT) => Promise<void>;
  cleanUpLists: () => void;
  // Recently Saved Articles
  cleanUpSavedArticles: () => void;
  getRecentlySavedArticles: () => Promise<void>;
};

type ListStoreT = ListStateT & ListActionsT;

export type { ListStateT, ListStoreT };
