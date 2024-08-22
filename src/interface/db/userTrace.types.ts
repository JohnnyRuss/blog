import { ArticleShortT } from "./article.types";

type HistoryGroupT = { year: number; month: number; day?: number };
type HistoryArticleT = ArticleShortT & { readAt: string };

type GetUserHistoryResponseT = {
  hasMore: boolean;
  currentPage: number;
  data: Array<{
    group: HistoryGroupT;
    articles: Array<HistoryArticleT>;
  }>;
};

export type { GetUserHistoryResponseT, HistoryGroupT, HistoryArticleT };
