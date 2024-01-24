import * as Styled from "./form.styled";
import { ErrorMessage } from "@/components/Layouts";

type TextareaFieldT = {
  name: string;
  value: string;
  error?: boolean;
  message?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & React.ComponentProps<"textarea">;

const TextareaField: React.FC<TextareaFieldT> = ({
  name,
  onChange,
  value,
  error,
  message,
  ...props
}) => {
  return (
    <Styled.TextareaField>
      <textarea
        {...props}
        name={name}
        value={value}
        onChange={onChange}
        className={`text-field__input ${props.className || ""}`}
      />

      {error && <ErrorMessage message={message || ""} />}
    </Styled.TextareaField>
  );
};

export default TextareaField;
