import { LoadingStatusT } from "@/interface/store/common.types";
import {
  ArticleShortT,
  GetAllArticlesArgsT,
} from "@/interface/db/article.types";

type HistoryStateT = {
  status: LoadingStatusT;
  clearStatus: LoadingStatusT;
  hasMore: boolean;
  currentPage: number;
  history: Array<ArticleShortT & { readAt: string }>;
};

type HistoryActionsT = {
  getHistory: (limit?: number) => Promise<void>;
  getHistoryPaginated: (args: GetAllArticlesArgsT) => Promise<void>;
  cleanUpHistory: () => void;
  clearHistory: () => Promise<void>;
};

type HistoryStoreT = HistoryStateT & HistoryActionsT;

export type { HistoryStateT, HistoryStoreT };
