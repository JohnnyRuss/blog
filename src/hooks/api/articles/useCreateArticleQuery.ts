import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useArticleForm,
  ArticleSchemaT,
} from "@/utils/validations/articleSchema";
import { articleStore } from "@/store";
import { NODE_MODE } from "@/config/env";
import { PATHS } from "@/config/paths";

export default function useCreateArticleQuery(articleId?: string) {
  const navigate = useNavigate();

  const form = useArticleForm();

  const [isUpdating, setIsUpdating] = useState(false);

  const onStartUpdate = (values: ArticleSchemaT) => {
    form.reset(values);
    setIsUpdating(true);
  };

  const status = articleStore.use.createStatus();
  const create = articleStore.use.create();
  const update = articleStore.use.update();

  const onPublish = form.handleSubmit(async (values) => {
    try {
      if (!isUpdating) {
        await create(values);
      } else {
        if (!articleId) return;
        await update({ articleId, data: values });
      }

      form.reset({ title: "", body: "", categories: [] });
      navigate(PATHS.write);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  });

  return { status, onPublish, onStartUpdate, form };
}
