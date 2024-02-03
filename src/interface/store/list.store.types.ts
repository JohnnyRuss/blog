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
  // ========== CREATE ==========
  createListStatus: LoadingStatusT;
  // ========== Add To List ==========
  listsToAddStatus: LoadingStatusT;
  listsToAdd: Array<ListShortT>;
  // ========== Lists ==========
  listsStatus: LoadingStatusT;
  lists: Array<ListT>;
  // ========== List Details ==========
  listDetails: Omit<ListT, "articles">;
  listDetailsStatus: LoadingStatusT;
  // ========== List Articles ==========
  hasMore: boolean;
  currentPage: number;
  listArticles: Array<ArticleShortT>;
  listArticlesStatus: LoadingStatusT;
  // ========== Saved Articles ==========
  savedStatus: LoadingStatusT;
  savedArticles: Array<ArticleShortT>;
};

type ListActionsT = {
  // ========== CREATE ==========
  createList: (args: CreateListAgsT) => Promise<void>;
  // ========== Add To List ==========
  getListsToAdd: () => Promise<void>;
  addToList: (args: AddToListAgsT) => Promise<void>;
  cleanUpListsToAdd: () => void;
  // ========== Lists ==========
  getLists: (args: GetListsAgsT) => Promise<void>;
  cleanUpLists: () => void;
  // ========== List Details ==========
  getListDetails: (listId: string) => Promise<void>;
  cleanUpListDetails: () => void;
  // ========== List Articles ==========
  getListArticles: (listId: string) => Promise<void>;
  getPaginatedListArticles: (args: {
    page: number;
    listId: string;
  }) => Promise<void>;
  cleanUpListArticles: () => void;
  // ========== Saved Articles ==========
  cleanUpSavedArticles: () => void;
  getRecentlySavedArticles: () => Promise<void>;
};

type ListStoreT = ListStateT & ListActionsT;

export type { ListStateT, ListStoreT };
