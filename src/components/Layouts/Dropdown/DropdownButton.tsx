import { OnToggleDropDownT } from "./dropdown.types";

type DropdownButtonT = {
  isActive: boolean;
  buttonClass: string;
  Button: React.ReactNode;
  onToggleDropDown: OnToggleDropDownT;
};

const DropdownButton: React.FC<DropdownButtonT> = ({
  Button,
  isActive,
  buttonClass,
  onToggleDropDown,
}) => {
  return (
    <button
      type="button"
      name="options dropdown"
      aria-label="options dropdown"
      onClick={onToggleDropDown}
      className={`dropdown__trigger-btn ${buttonClass || ""} ${
        isActive ? "active" : ""
      }`}
    >
      {Button}
    </button>
  );
};

export default DropdownButton;
