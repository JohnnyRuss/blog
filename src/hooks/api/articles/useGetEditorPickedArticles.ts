/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { articleStore } from "@/store";

export default function useGetEditorPickedArticles() {
  const data = articleStore.use.editorPickedArticles();
  const status = articleStore.use.editorPickedStatus();
  const get = articleStore.use.getEditorPickedArticles();
  const cleanUp = articleStore.use.cleanUpEditorPickedArticles();

  useEffect(() => {
    (async () => await get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { data, status };
}
