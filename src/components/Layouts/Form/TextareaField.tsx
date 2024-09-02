import * as Styled from "./form.styled";
import { ErrorMessage } from "@/components/Layouts";

import { HookFormTextFieldT } from "@/interface/form.types";
import React from "react";

type TextareaFieldT = {
  message: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
} & React.ComponentProps<"textarea"> & {
    ref?: React.Ref<HTMLTextAreaElement | null>;
  };

const TextareaField: React.FC<TextareaFieldT> = React.forwardRef(
  ({ message, hasError, fieldProps, ...props }, ref) => {
    return (
      <Styled.TextareaField data-textarea>
        <textarea
          {...props}
          {...fieldProps}
          ref={ref}
          className={`text-field__input ${props.className || ""}`}
        />

        {hasError && <ErrorMessage message={message || ""} />}
      </Styled.TextareaField>
    );
  }
);

export default TextareaField;
