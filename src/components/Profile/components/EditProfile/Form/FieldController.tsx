import { Controller, Control, FieldValues } from "react-hook-form";

import { HookFormTextFieldT } from "@/interface/form.types";

type RenderArgsT = {
  message: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
};

type FieldControllerT = {
  max?: number;
  name: string;
  showCounter?: boolean;
  formControl: Control<FieldValues>;
  render: (args: RenderArgsT) => React.ReactNode;
};

const FieldController: React.FC<FieldControllerT> = (props) => {
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
};

export default FieldController;
