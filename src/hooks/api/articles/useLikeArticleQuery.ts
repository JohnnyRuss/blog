import { NODE_MODE } from "@/config/env";
import { articleStore } from "@/store";

import { LikeArticleArgsT } from "@/interface/db/article.types";

export default function useLikeArticleQuery() {
  const like = articleStore.use.like();

  const onLike = async (args: LikeArticleArgsT) => {
    try {
      await like(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return { onLike };
}
