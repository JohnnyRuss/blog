/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { articleStore } from "@/store";

export default function useReadArticleQuery() {
  const { slug } = useParams();

  const get = articleStore.use.get();
  const data = articleStore.use.article();
  const status = articleStore.use.readStatus();
  const cleanUp = articleStore.use.cleanUpArticle();

  useEffect(() => {
    if (!slug) return;

    (async () => await get({ slug }))();

    return () => {
      cleanUp();
    };
  }, [slug]);

  return { status, data };
}
