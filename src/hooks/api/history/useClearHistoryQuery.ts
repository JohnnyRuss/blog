import { historyStore } from "@/store";

export default function useClearHistoryQuery() {
  const clear = historyStore.use.clearHistory();
  const status = historyStore.use.clearStatus();

  const clearQuery = async () => await clear();

  return { status, clearQuery };
}
