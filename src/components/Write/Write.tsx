import { useState } from "react";

import randomColor from "randomcolor";

import { textCapitalize } from "@/utils";

import * as Styled from "./write.styled";
import { QuillEditor, MultiSelect } from "@/components/Layouts";

import {
  MultiSelectOptionT,
  OnMultipleSelectT,
} from "@/interface/ui/commons.types";

type CategoryItemT = MultiSelectOptionT<{ color: string }>;

const options = [
  { label: "Fashion", value: "grapes", color: "2" },
  { label: "WebDev", value: "mango", color: "1" },
  { label: "Coding", value: "strawberry", color: "3", disabled: false },
];

const Write: React.FC = () => {
  const [title, setTitle] = useState("");
  const [quillBody, setQuillBody] = useState("");
  const [categories, setCategories] = useState<Array<CategoryItemT>>([]);

  const onSelectCategory: OnMultipleSelectT<CategoryItemT> = ({
    isNew,
    values,
    lastIndex,
  }) => {
    if (isNew && !values[lastIndex].color) {
      const clr = randomColor({ luminosity: "dark", alpha: 1 });
      values[lastIndex] = {
        ...values[lastIndex],
        isNew,
        color: clr,
        label: textCapitalize(values[lastIndex].label),
      };

      setCategories(() => values);
    } else setCategories(() => values);
  };

  const onPublish = () => {
    console.log({
      title,
      quillBody,
      categories,
    });
  };

  return (
    <Styled.write>
      <textarea
        placeholder="Title"
        className="title-input"
        rows={2}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <MultiSelect
        options={options}
        value={categories}
        onSelect={onSelectCategory}
      />

      <QuillEditor value={quillBody} setValue={setQuillBody} />

      <button className="publish-btn" onClick={onPublish}>
        Publish
      </button>
    </Styled.write>
  );
};

export default Write;
