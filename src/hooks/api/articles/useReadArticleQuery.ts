import { NODE_MODE } from "@/config/env";
import { articleStore } from "@/store";

import { GetArticleArgsT } from "@/interface/db/article.types";

export default function useReadArticleQuery() {
  const status = articleStore.use.readStatus();
  const get = articleStore.use.get();

  const getArticle = async (args: GetArticleArgsT) => {
    try {
      await get(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { status, getArticle };
}
