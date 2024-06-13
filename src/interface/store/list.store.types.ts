import {
  ListShortT,
  ListT,
  // API
  GetListsArgsT,
  AddToListArgsT,
  CreateListArgsT,
  UpdateListArgsT,
  DeleteListArgsT,
  SaveListArgsT,
  GetSavedListsArgsT,
} from "@/interface/db/list.types";
import { ArticleShortT } from "@/interface/db/article.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type ListStateT = {
  // ========== CREATE ==========
  createListStatus: LoadingStatusT;
  // ========== DELETE ==========
  deleteListStatus: LoadingStatusT;
  // ========== Add To List ==========
  listsToAdd: Array<ListShortT>;
  listsToAddStatus: LoadingStatusT;
  // ========== Lists ==========
  lists: Array<ListT>;
  listsStatus: LoadingStatusT;
  // ========== List Details ==========
  listDetails: Omit<ListT, "articles">;
  listDetailsStatus: LoadingStatusT;
  // ========== List Articles ==========
  hasMore: boolean;
  currentPage: number;
  listArticles: Array<ArticleShortT>;
  listArticlesStatus: LoadingStatusT;
  // ========== Saved Articles ==========
  savedArticles: Array<ArticleShortT>;
  savedArticlesIds: Array<string>;
  savedStatus: LoadingStatusT;
  // ========== Saved Lists ==========
  savedListsIds: Array<string>;
  savedLists: Array<ListT>;
  savedListsStatus: LoadingStatusT;
  saveListStatus: LoadingStatusT;
};

type ListActionsT = {
  // ========== CREATE ==========
  createList: (args: CreateListArgsT) => Promise<void>;
  updateList: (args: UpdateListArgsT) => Promise<void>;
  // ========== DELETE ==========
  deleteList: (args: DeleteListArgsT) => Promise<void>;
  // ========== Add To List ==========
  getListsToAdd: () => Promise<void>;
  addToList: (args: AddToListArgsT) => Promise<void>;
  cleanUpListsToAdd: () => void;
  // ========== Lists ==========
  getLists: (args: GetListsArgsT) => Promise<void>;
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
  getSavedArticlesIds: () => Promise<void>;
  cleanUpSavedArticlesIds: () => void;
  // ========== Saved Lists ==========
  getSavedListsIds: () => Promise<void>;
  getSavedLists: (args: GetSavedListsArgsT) => Promise<void>;
  saveList: (args: SaveListArgsT) => Promise<void>;
  removeList: (args: SaveListArgsT) => Promise<void>;
};

type ListStoreT = ListStateT & ListActionsT;

export type { ListStateT, ListStoreT };
