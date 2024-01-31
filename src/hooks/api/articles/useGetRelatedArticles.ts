/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { articleStore } from "@/store";

export default function useGetRelatedArticles() {
  const { slug } = useParams();

  const data = articleStore.use.relatedArticles();
  const status = articleStore.use.relatedStatus();
  const getRelatedArticles = articleStore.use.getRelatedArticles();
  const cleanUpRelatedArticles = articleStore.use.cleanUpRelatedArticles();

  useEffect(() => {
    if (!slug) return;

    getRelatedArticles({ slug });

    return () => {
      cleanUpRelatedArticles();
    };
  }, [slug]);

  return { data, status };
}
