import { listsStore } from "@/store";

export default function useGetSavedArticlesQuery() {
  const status = listsStore.use.savedStatus();
  const data = listsStore.use.savedArticles();
  const cleanUpSavedArticles = listsStore.use.cleanUpSavedArticles();
  const getRecentlySavedArticles = listsStore.use.getRecentlySavedArticles();

  const getRecentlySaved = async () => await getRecentlySavedArticles();

  return { status, data, getRecentlySaved, cleanUpSavedArticles };
}
