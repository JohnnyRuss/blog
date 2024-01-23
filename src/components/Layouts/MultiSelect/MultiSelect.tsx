import { MultiSelect as Select } from "react-multi-select-component";

import * as Styled from "./multiSelect.styled";

import {
  MultiSelectOptionT,
  MultiSelectPropsT,
} from "@/interface/ui/commons.types";

const MultiSelect = <T,>({
  value,
  options,
  onSelect,
}: MultiSelectPropsT<T>) => {
  const handleSelect = (
    values: Array<MultiSelectOptionT<T> & { __isNew__?: boolean }>
  ) => {
    const lastIndex = values.length - 1;
    const isNew = lastIndex >= 0 ? values[lastIndex].__isNew__ : false;
    onSelect({ lastIndex, isNew, values });
  };

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
    </Styled.SelectContainer>
  );
};

export default MultiSelect;
