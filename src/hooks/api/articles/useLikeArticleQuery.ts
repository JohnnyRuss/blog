import { articleStore } from "@/store";

import { LikeArticleArgsT } from "@/interface/db/article.types";

export default function useLikeArticleQuery() {
  const like = articleStore.use.like();

  const onLike = async (args: LikeArticleArgsT) => {
    await like(args);
  };

  return { onLike };
}
