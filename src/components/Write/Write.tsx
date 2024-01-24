/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Controller } from "react-hook-form";
import randomColor from "randomcolor";

import { textCapitalize } from "@/utils";
import { useCreateArticleQuery } from "@/hooks/api/articles";

import {
  QuillEditor,
  MultiSelect,
  TextareaField,
  StandSpinner,
} from "@/components/Layouts";
import * as Styled from "./write.styled";

import {
  OnSelectCategoryArgsT,
  CategoryDropdownOptionT,
  OnSelectCategoryReturnT,
  CategoryDropdownInvertedOptionT,
} from "./index.types";
import { ArticleSchemaT } from "@/utils/validations/articleSchema";

const fitCategoryData = (v: CategoryDropdownInvertedOptionT) => ({
  color: v.color,
  label: v.title,
  value: v.query,
  isNew: v.isNew || false,
});

const invertCategoryData = (v: CategoryDropdownOptionT) => ({
  color: v.color,
  title: v.label,
  query: v.value,
  isNew: v.isNew || false,
});

const Write: React.FC = () => {
  const { state } = useLocation();
  const updateAbleArticle: undefined | ArticleSchemaT = state?.article;

  const { form, status, onPublish, onStartUpdate, categorySuggestions } =
    useCreateArticleQuery();

  const onSelectCategory = ({
    fieldChangeHandler,
    value: { isNew, lastIndex, values },
  }: OnSelectCategoryArgsT) => {
    if (isNew && !values[lastIndex].color) {
      const newCategory = values[lastIndex];
      const color = randomColor({ luminosity: "dark", alpha: 1 });

      values[lastIndex] = {
        ...newCategory,
        isNew,
        color,
        label: textCapitalize(newCategory.label),
      };
    }

    fieldChangeHandler(values.map(invertCategoryData));
  };

  useEffect(() => {
    if (!updateAbleArticle) return;
    onStartUpdate(updateAbleArticle);
  }, [updateAbleArticle]);

  const options = useMemo(
    () => categorySuggestions.map(fitCategoryData),
    [categorySuggestions]
  );

  return (
    <Styled.write>
      <Controller
        control={form.control}
        name="title"
        render={({ field, fieldState: { error } }) => (
          <TextareaField
            rows={2}
            placeholder="Title"
            className="title-input"
            error={error ? true : false}
            message={error?.message}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        control={form.control}
        name="categories"
        render={({ field, fieldState: { error } }) => (
          <MultiSelect
            options={options}
            error={error ? true : false}
            message={error?.message}
            value={field.value.map(fitCategoryData)}
            onSelect={(value: OnSelectCategoryReturnT) =>
              onSelectCategory({ fieldChangeHandler: field.onChange, value })
            }
          />
        )}
      />

      <Controller
        control={form.control}
        name="body"
        render={({ field, fieldState: { error } }) => (
          <QuillEditor
            value={field.value}
            setValue={field.onChange}
            error={error ? true : false}
            message={error?.message}
          />
        )}
      />

      <button className="publish-btn" onClick={onPublish}>
        Publish
      </button>

      {status.loading && <StandSpinner />}
    </Styled.write>
  );
};

export default Write;
