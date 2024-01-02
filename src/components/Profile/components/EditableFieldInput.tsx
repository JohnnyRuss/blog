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
        <TextField name={name} value={value} onChange={onChangeValue} />
      )}

      <button onClick={onCancelEdit}>Cancel</button>
    </div>
  );
};

export default EditableFieldInput;
