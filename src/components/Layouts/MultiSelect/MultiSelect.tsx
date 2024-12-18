import { MultiSelect as Select } from "react-multi-select-component";

import * as Styled from "./multiSelect.styled";
import { ErrorMessage } from "@/components/Layouts";

import {
  MultiSelectOptionT,
  MultiSelectPropsT,
} from "@/interface/ui/commons.types";
import { useEffect } from "react";

const MultiSelect = <T,>({
  value,
  options,
  onSelect,
  error,
  message,
  placeholder,
}: MultiSelectPropsT<T>) => {
  const handleSelect = (
    values: Array<MultiSelectOptionT<T> & { __isNew__?: boolean }>
  ) => {
    const lastIndex = values.length - 1;
    const isNew = lastIndex >= 0 ? values[lastIndex].__isNew__ : false;
    onSelect({ lastIndex, isNew, values });
  };

  useEffect(() => {
    const el = document.querySelector("span.gray");
    if (el) el.textContent = placeholder || "Select";
  }, [placeholder]);

  return (
    <Styled.SelectContainer>
      <Select
        options={options}
        value={value}
        onChange={handleSelect}
        labelledBy="Categories"
        hasSelectAll={false}
        isCreatable={true}
      />

      {error && <ErrorMessage message={message || ""} />}
    </Styled.SelectContainer>
  );
};

export default MultiSelect;
