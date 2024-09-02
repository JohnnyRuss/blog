import { DropdownItemT } from "@/interface/ui/commons.types";

type DropdownT<T extends DropdownItemT> = {
  data?: T[];
  onSelect?: (item: T) => void;
  dropdownMaxHeight?: number;
  dropdownMinWidth?: number;
  dropdownClass?: string;
  buttonClass?: string;
  Button: React.ReactNode;
  children?: (onToggleDropdown: OnToggleDropDownT) => React.ReactNode;
};

type OnToggleDropDownT = (e?: React.MouseEvent) => void;

type OnSelectItemT = (item: DropdownItemT) => void;

export type { DropdownT, OnToggleDropDownT, OnSelectItemT };
