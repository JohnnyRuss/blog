import { Control, FieldValues } from "react-hook-form";

import FieldController from "./FieldController";
import { TextField, TextareaField } from "@/components/Layouts";

import { LoadingStatusT } from "@/interface/store/common.types";

type EditableFieldInputT = {
  name: string;
  max?: number;
  showCounter?: boolean;
  type: "text" | "textarea";
  onCancelEdit: () => void;
  status: LoadingStatusT;
  formControl: Control<FieldValues>;
  onSave: (e: React.BaseSyntheticEvent<object, any, any>) => Promise<void>;
};

const EditableFieldInput: React.FC<EditableFieldInputT> = ({
  name,
  type,
  onSave,
  max,
  status,
  showCounter,
  formControl,
  onCancelEdit,
}) => {
  return (
    <div className="details-block__content-edit">
      <FieldController
        max={max}
        name={name}
        formControl={formControl}
        showCounter={showCounter}
        render={(args) =>
          type === "textarea" ? (
            <TextareaField {...args} />
          ) : (
            <TextField {...args} />
          )
        }
      />

      <div className="editable-field__actions-box">
        <button
          onClick={onCancelEdit}
          disabled={status.loading}
          className="editable-field__actions-box--btn cancel-btn"
        >
          Cancel
        </button>

        <button
          onClick={onSave}
          disabled={status.loading}
          className="editable-field__actions-box--btn save-btn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditableFieldInput;
