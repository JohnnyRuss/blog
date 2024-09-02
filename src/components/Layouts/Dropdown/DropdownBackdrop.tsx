import { OnToggleDropDownT } from "./dropdown.types";

type DropdownBackdropT = {
  onToggleDropDown: OnToggleDropDownT;
};

const DropdownBackdrop: React.FC<DropdownBackdropT> = ({
  onToggleDropDown,
}) => {
  return (
    <div
      onClick={onToggleDropDown}
      className="dropdown__backdrop scroll-block"
    />
  );
};

export default DropdownBackdrop;
