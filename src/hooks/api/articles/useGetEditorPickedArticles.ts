/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetEditorPickedArticles() {
  const data = articleStore.use.editorPickedArticles();
  const status = articleStore.use.editorPickedStatus();
  const getEditorPickedArticles = articleStore.use.getEditorPickedArticles();
  const cleanUpEditorPickedArticles =
    articleStore.use.cleanUpEditorPickedArticles();

  useEffect(() => {
    getEditorPickedArticles();

    return () => {
      cleanUpEditorPickedArticles();
    };
  }, []);

  return { data, status };
}
