import { Controller, UseFormReturn } from "react-hook-form";

import * as Styled from "./createList.styled";
import PrivateIcon from "@/assets/icons/private.svg";
import { TextField, TextareaField, CheckBox } from "@/components/Layouts";

import { CreateListSchemaT } from "@/utils/validations/createListSchema";

type CreateListFormT = {
  onCancel: () => void;
  onCreate: () => Promise<void>;
  form: UseFormReturn<CreateListSchemaT>;
};

const CreateListForm: React.FC<CreateListFormT> = ({
  form,
  onCreate,
  onCancel,
}) => {
  return (
    <Styled.CreateList>
      <form className="create-list__form">
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState: { error } }) => (
            <TextField
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
              placeholder="Title"
            />
          )}
        />

        <Controller
          control={form.control}
          name="description"
          render={({ field, fieldState: { error } }) => (
            <TextareaField
              fieldProps={field}
              hasError={error ? true : false}
              message={error?.message || ""}
              placeholder="Description"
            />
          )}
        />

        <Controller
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <label htmlFor="privacy">
              <input
                type="checkbox"
                id="privacy"
                hidden
                checked={field.value === "PRIVATE" ? true : false}
                onChange={(e) =>
                  field.onChange(e.target.checked ? "PRIVATE" : "PUBLIC")
                }
              />
              <p style={{ display: "flex", alignItems: "Center" }}>
                <CheckBox checked={field.value === "PRIVATE" ? true : false} />
                <img
                  src={PrivateIcon}
                  alt=""
                  width={20}
                  height={20}
                  style={{ marginLeft: "1rem" }}
                />
                &nbsp;
                <span>Private</span>
              </p>
            </label>
          )}
        />
      </form>

      <div className="create-list__footer">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onCreate}>Create</button>
      </div>
    </Styled.CreateList>
  );
};

export default CreateListForm;
