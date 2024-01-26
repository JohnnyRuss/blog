import { Controller, Control, FieldValues } from "react-hook-form";

import { TextField, TextareaField } from "@/components/Layouts";

import { HookFormTextFieldT } from "@/interface/form.types";
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

type RenderArgsT = {
  message: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
};

function FieldController(props: {
  max?: number;
  name: string;
  showCounter?: boolean;
  formControl: Control<FieldValues>;
  render: (args: RenderArgsT) => React.ReactNode;
}) {
  return (
    <Controller
      name={props.name}
      control={props.formControl}
      render={({ field, fieldState: { error } }) => (
        <>
          {props.render({
            fieldProps: {
              ...field,
              onChange: (
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => {
                const value =
                  props.max && e.target.value.length > props.max
                    ? field.value
                    : e.target.value;
                field.onChange(value);
              },
            },
            message: error?.message || "",
            hasError: error ? true : false,
          })}

          {props.showCounter && (
            <span className="details-block__counter">
              {field.value.length}/{props.max}
            </span>
          )}
        </>
      )}
    />
  );
}
