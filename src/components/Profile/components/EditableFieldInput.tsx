import { TextField, TextareaField } from "@/components/Layouts";

type EditableFieldInputT = {
  name: string;
  value: string;
  onChangeValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: "text" | "textarea";
  onCancelEdit: () => void;
};

const EditableFieldInput: React.FC<EditableFieldInputT> = ({
  name,
  type,
  value,
  onChangeValue,
  onCancelEdit,
}) => {
  return (
    <div className="details-block__content-edit">
      {type === "textarea" ? (
        <TextareaField name={name} value={value} onChange={onChangeValue} />
      ) : (
        <TextField
          fieldProps={{
            name,
            value,
            onBlur: () => {},
            onChange: () => {},
            ref: null,
          }}
          hasError={false}
          message=""
        />
      )}

      <button onClick={onCancelEdit}>Cancel</button>
    </div>
  );
};

export default EditableFieldInput;
