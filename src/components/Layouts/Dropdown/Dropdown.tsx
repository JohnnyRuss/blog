import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as Styled from "./dropdown.styled";
import DropdownButton from "./DropdownButton";
import DropdownBackdrop from "./DropdownBackdrop";
import DropdownItem from "./DropdownItem";

import { DropdownItemT } from "@/interface/ui/commons.types";
import { DropdownT, OnSelectItemT, OnToggleDropDownT } from "./dropdown.types";

const Dropdown: React.FC<DropdownT<DropdownItemT>> = ({
  data = [],
  onSelect,
  buttonClass,
  dropdownClass,
  dropdownMaxHeight = 190,
  dropdownMinWidth = 170,
  Button,
  children,
}) => {
  const { isAuthenticated, decodedUser } = useCheckIsAuthenticatedUser(true);

  const filteredItems =
    data.length === 0
      ? []
      : isAuthenticated
      ? data.filter((item) =>
          item.role ? item.role === decodedUser?.role : item
        )
      : data.filter((item) => !item.authorized);

  const [openDropdown, setOpenDropdown] = useState(false);

  const onToggleDropDown: OnToggleDropDownT = (e) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (data.length > 0 && filteredItems.length <= 0) return;

    setOpenDropdown((prev) => !prev);
  };

  const onSelectItem: OnSelectItemT = (item) => {
    item.onSelect ? item.onSelect(item) : onSelect ? onSelect(item) : "";
    setOpenDropdown(false);
  };

  const allowOpen =
    openDropdown &&
    ((data.length > 0 && filteredItems.length > 0) ||
      (data.length === 0 && children));

  return (
    <Styled.Dropdown
      data-dropdown
      $dropdown_max_height={dropdownMaxHeight}
      $dropdown_min_width={dropdownMinWidth}
    >
      <DropdownButton
        Button={Button}
        buttonClass={buttonClass}
        onToggleDropDown={onToggleDropDown}
        isActive={data.some((item) => item.active)}
      />

      {allowOpen && (
        <>
          <DropdownBackdrop onToggleDropDown={onToggleDropDown} />

          <div className={`dropdown__window-wrapper ${dropdownClass || ""}`}>
            <div className="dropdown__window">
              {typeof children === "function" ? (
                (() => children(onToggleDropDown))()
              ) : (
                <DropdownItemsList
                  onSelectItem={onSelectItem}
                  filteredItems={filteredItems}
                />
              )}
            </div>
          </div>
        </>
      )}
    </Styled.Dropdown>
  );
};

export default Dropdown;

function DropdownItemsList({
  onSelectItem,
  filteredItems,
}: {
  onSelectItem: OnSelectItemT;
  filteredItems: Array<DropdownItemT>;
}) {
  return (
    <>
      {filteredItems.map((item) => (
        <DropdownItem key={uuid()} item={item} onSelectItem={onSelectItem} />
      ))}
    </>
  );
}
