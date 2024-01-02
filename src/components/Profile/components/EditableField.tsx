import { useState } from "react";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/editableField.styled";
import { EditButton } from "@/components/Layouts";
import EditableFieldInput from "./EditableFieldInput";

type EditableFieldT = {
  title: string;
  value: string;
  name: string;
  type?: "text" | "textarea";
  showCounter?: boolean;
  max?: number;
};

const EditableField: React.FC<EditableFieldT> = ({
  title,
  value,
  name,
  max,
  type = "text",
  showCounter = false,
}) => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const currentTarget = getParam("edit");
  const [isEditing, setIsEditing] = useState(
    currentTarget === name ? true : false
  );

  const onStartEdit = () => {
    setIsEditing(true);
    setParam("edit", name);
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    removeParam("edit");
    setInputValue(value);
  };

  const [inputValue, setInputValue] = useState(value);

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;
    if (newValue.length > max) return;

    setInputValue(newValue);
  };

  const isTextarea = type === "textarea";

  return (
    <Styled.EditableField className={isTextarea ? "long" : ""}>
      <div className="details-block">
        <div className="details-block__content">
          <span className="details-block__content-label">{title}</span>

          {!isEditing && (
            <span className="details-block__content-detail">{value}</span>
          )}

          {isEditing && (
            <EditableFieldInput
              name={name}
              type={type}
              value={inputValue}
              onCancelEdit={onCancelEdit}
              onChangeValue={onChangeValue}
            />
          )}
        </div>

        {!currentTarget && <EditButton onClick={onStartEdit} />}
      </div>

      {showCounter && (
        <span className="details-block__counter">
          {inputValue.length}/{max}
        </span>
      )}
    </Styled.EditableField>
  );
};

export default EditableField;
