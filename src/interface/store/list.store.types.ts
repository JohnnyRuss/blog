import { LoadingStatusT } from "./common.types";
import {
  ListShortT,
  ListT,
  // API
  GetListsAgsT,
  AddToListAgsT,
  CreateListAgsT,
} from "@/interface/db/list.types";

type ListStateT = {
  listsStatus: LoadingStatusT;
  lists: Array<ListT>;
  listsToAddStatus: LoadingStatusT;
  listsToAdd: Array<ListShortT>;
  createListStatus: LoadingStatusT;
};

type ListActionsT = {
  getListsToAdd: () => Promise<void>;
  addToList: (args: AddToListAgsT) => Promise<void>;
  cleanUpListsToAdd: () => void;
  getLists: (args: GetListsAgsT) => Promise<void>;
  cleanUpLists: () => void;
  createList: (args: CreateListAgsT) => Promise<void>;
};

type ListStoreT = ListStateT & ListActionsT;

export type { ListStateT, ListStoreT };
