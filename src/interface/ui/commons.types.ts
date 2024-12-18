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
  error?: boolean;
  message?: string;
  placeholder?: string;
};

type DialogT = {
  open: boolean;
  title?: string;
  subTitle?: string;
  message: string;
  target: string;
  type?: "warning" | "detailed" | "danger";
  onClose: () => void;
  onConfirm: () => void;
};

type DropdownItemT = {
  label?: React.ReactNode;
  onSelect?: (item?: Omit<DropdownItemT, "onSelect">) => void;
  active?: boolean;
  danger?: boolean;
  authorized?: boolean;
  role?: string;
};

export type {
  MultiSelectOptionT,
  MultiSelectPropsT,
  OnMultipleSelectT,
  DialogT,
  DropdownItemT,
};
