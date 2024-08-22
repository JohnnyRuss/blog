import { LoadingStatusT } from "@/interface/store/common.types";
import { GetAllArticlesArgsT } from "@/interface/db/article.types";
import { HistoryGroupT, HistoryArticleT } from "@/interface/db/userTrace.types";

type HistoryStateT = {
  status: LoadingStatusT;
  clearStatus: LoadingStatusT;
  hasMore: boolean;
  currentPage: number;
  history: Array<{
    group: HistoryGroupT;
    articles: Array<HistoryArticleT>;
  }>;
};

type HistoryActionsT = {
  getHistory: (limit?: number) => Promise<void>;
  getHistoryPaginated: (args: GetAllArticlesArgsT) => Promise<void>;
  cleanUpHistory: () => void;
  clearHistory: () => Promise<void>;
};

type HistoryStoreT = HistoryStateT & HistoryActionsT;

export type { HistoryStateT, HistoryStoreT };
