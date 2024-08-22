/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  useArticleForm,
  ArticleSchemaT,
} from "@/utils/validations/articleSchema";
import { articleStore } from "@/store";
import { PATHS } from "@/config/paths";

export default function useCreateArticleQuery(articleSlug?: string) {
  const navigate = useNavigate();

  const form = useArticleForm();

  const [isUpdating, setIsUpdating] = useState(false);

  const onStartUpdate = (values: ArticleSchemaT) => {
    form.reset({
      _id: values._id,
      slug: values.slug,
      title: values.title,
      body: values.body,
      categories: values.categories,
    });
    setIsUpdating(true);
  };

  const create = articleStore.use.create();
  const update = articleStore.use.update();
  const status = articleStore.use.createStatus();

  const categorySuggestions = articleStore.use.categorySuggestions();
  const getCategorySuggestions = articleStore.use.getCategorySuggestions();

  const cleanUp = articleStore.use.cleanUpSuggestions();

  const onPublish = form.handleSubmit(async (values) => {
    if (!isUpdating) await create(values);
    else {
      if (!articleSlug) return;
      await update({ articleSlug, data: values });
    }

    form.reset({ _id: "", slug: "", title: "", body: "", categories: [] });
    navigate(PATHS.write);
  });

  useEffect(() => {
    (async () => await getCategorySuggestions())();

    return () => {
      cleanUp();
    };
  }, []);

  return {
    status,
    onPublish,
    onStartUpdate,
    form,
    categorySuggestions,
    isUpdating,
  };
}
