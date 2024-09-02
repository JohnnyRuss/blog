import React from "react";
import { OnSelectItemT, OnToggleDropDownT } from "./dropdown.types";
import { DropdownItemT as DropdownItemType } from "@/interface/ui/commons.types";

type DropdownItemT = {
  children?: React.ReactNode;
  item?: DropdownItemType;
  onSelectItem: OnSelectItemT;
  onToggleDropDown?: OnToggleDropDownT;
};

const DropdownItem: React.FC<DropdownItemT> = ({
  item,
  children,
  onSelectItem,
  onToggleDropDown,
}) => {
  const onSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onSelectItem(item);
    onToggleDropDown();
  };

  return (
    <div
      onClick={onSelect}
      className={`${item?.active ? "active" : ""} ${
        item?.danger ? "danger" : ""
      } dropdown__window-item`}
    >
      {children ? children : item.label}
    </div>
  );
};

export default DropdownItem;
