import * as Styed from "./checkBox.styled";
import { Check } from "@/components/Layouts/Icons";

type CheckBoxT = {
  checked: boolean;
  onCheck?: () => void;
};

const CheckBox: React.FC<CheckBoxT> = ({ checked, onCheck = () => {} }) => {
  return (
    <Styed.CheckBox
      data-checkbox
      className={checked ? "checked" : ""}
      onClick={onCheck}
    >
      <span className="checkbox--icon">
        <Check />
      </span>
    </Styed.CheckBox>
  );
};

export default CheckBox;
