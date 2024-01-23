type MultiSelectOptionT<T> = T & {
  label: string;
  value: string;
  isNew?: boolean;
  disabled?: boolean;
};

type OnMultipleSelectT<T> = (args: {
  isNew: boolean;
  lastIndex: number;
  values: Array<MultiSelectOptionT<T>>;
}) => void;

type MultiSelectPropsT<T> = {
  options: Array<MultiSelectOptionT<T>>;
  value: Array<MultiSelectOptionT<T>>;
  onSelect: OnMultipleSelectT<T>;
};

export type { MultiSelectOptionT, MultiSelectPropsT, OnMultipleSelectT };
