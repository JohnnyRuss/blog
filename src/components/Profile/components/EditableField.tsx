import { useState, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

import { useSearchParams } from "@/hooks/utils";

import { EditButton } from "@/components/Layouts";
import EditableFieldInput from "./EditableFieldInput";
import * as Styled from "./styles/editableField.styled";

import { LoadingStatusT } from "@/interface/store/common.types";

type EditableFieldT = {
  max?: number;
  name: string;
  title: string;
  showCounter?: boolean;
  status: LoadingStatusT;
  type?: "text" | "textarea";
  form: UseFormReturn<{ [key: string]: string }>;
  onSave: (e: React.BaseSyntheticEvent<object, any, any>) => Promise<void>;
};

const EditableField: React.FC<EditableFieldT> = ({
  title,
  name,
  max,
  form,
  onSave,
  status,
  type = "text",
  showCounter = false,
}) => {
  const formControl = form.control;
  const formValue = form.getValues(name);

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
    form.reset({ [name]: formValue });
  };

  useEffect(() => {
    if (!currentTarget) setIsEditing(false);
  }, [currentTarget]);

  return (
    <Styled.EditableField>
      <div className="details-block">
        <div className="details-block__content">
          <span className="details-block__content-label">{title}</span>

          {!isEditing && (
            <span className={`details-block__content-detail ${name}`}>
              {formValue}
            </span>
          )}

          {isEditing && (
            <EditableFieldInput
              max={max}
              name={name}
              type={type}
              onSave={onSave}
              status={status}
              showCounter={showCounter}
              formControl={formControl}
              onCancelEdit={onCancelEdit}
            />
          )}
        </div>

        {!currentTarget && <EditButton onClick={onStartEdit} />}
      </div>
    </Styled.EditableField>
  );
};

export default EditableField;
