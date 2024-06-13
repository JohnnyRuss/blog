/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { articleStore } from "@/store";

export default function useGetRelatedArticlesQuery() {
  const { slug } = useParams();

  const data = articleStore.use.relatedArticles();
  const status = articleStore.use.relatedStatus();
  const get = articleStore.use.getRelatedArticles();
  const cleanUp = articleStore.use.cleanUpRelatedArticles();

  useEffect(() => {
    if (!slug) return;

    (async () => await get({ slug }))();

    return () => {
      cleanUp();
    };
  }, [slug]);

  return { data, status };
}
