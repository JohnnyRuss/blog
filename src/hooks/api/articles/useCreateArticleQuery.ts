/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  useArticleForm,
  ArticleSchemaT,
} from "@/utils/validations/articleSchema";
import { articleStore } from "@/store";
import { PATHS } from "@/config/paths";
import { CategoryT } from "@/interface/db/category.types";

const wrapImagesInDiv = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const paragraphs = Array.from(doc.querySelectorAll("p"));
  let tempDiv = null;

  paragraphs.forEach((p) => {
    const hasImg = p.querySelector("img");

    if (hasImg) {
      if (!tempDiv) {
        tempDiv = doc.createElement("div");
        tempDiv.className = "image-grid"; // Add class for styling
        p.parentNode.insertBefore(tempDiv, p);
      }
      tempDiv.appendChild(p);
    } else {
      if (tempDiv) {
        p.parentNode.insertBefore(tempDiv, p.nextSibling);
        tempDiv = null;
      }
    }
  });

  if (tempDiv) {
    doc.body.appendChild(tempDiv); // Append last created div if it exists
  }

  return doc.body.innerHTML;
};

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

  const refreshCategorySuggestions = async (
    categories: Array<Partial<CategoryT> & { isNew?: boolean }>
  ) => {
    const hasNewCategories = categories.some((c) => c.isNew);
    if (!hasNewCategories) return;
    await getCategorySuggestions();
  };

  const onPublish = form.handleSubmit(async (values) => {
    if (!isUpdating) {
      await create(values);
      await refreshCategorySuggestions(values.categories);
    } else {
      if (!articleSlug) return;

      await update({
        articleSlug,
        data: { ...values, body: wrapImagesInDiv(values.body) },
      });

      await refreshCategorySuggestions(values.categories);
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
