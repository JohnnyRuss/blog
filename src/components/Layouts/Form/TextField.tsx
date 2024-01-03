import { HookFormTextFieldT } from "@/interface/form.types";

import * as Styled from "./form.styled";

type TextFieldT = {
  message: string;
  label?: string;
  hasError: boolean;
  type?: "text" | "password";
  fieldProps: HookFormTextFieldT;
};

const TextField: React.FC<TextFieldT> = ({
  label,
  message,
  hasError,
  fieldProps,
  type = "text",
}) => {
  return (
    <Styled.TextField>
      {label && <label htmlFor={fieldProps.name}>{label}</label>}

      <input
        type={type}
        {...fieldProps}
        id={fieldProps.name}
        className="text-field__input"
      />

      {hasError && <p>{message}</p>}
    </Styled.TextField>
  );
};

export default TextField;
