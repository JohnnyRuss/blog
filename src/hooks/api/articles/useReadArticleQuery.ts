/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { NODE_MODE } from "@/config/env";
import { articleStore } from "@/store";

import { GetArticleArgsT } from "@/interface/db/article.types";

export default function useReadArticleQuery() {
  const { slug } = useParams();

  const get = articleStore.use.get();
  const data = articleStore.use.article();
  const status = articleStore.use.readStatus();
  const cleanUpArticle = articleStore.use.cleanUpArticle();

  const getArticle = async (args: GetArticleArgsT) => {
    try {
      await get(args);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  useEffect(() => {
    if (!slug) return;

    getArticle({ slug });

    return () => {
      cleanUpArticle();
    };
  }, [slug]);

  return { status, data };
}
