import * as Styled from "./form.styled";

type TextareaFieldT = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextareaField: React.FC<TextareaFieldT> = ({ name, onChange, value }) => {
  return (
    <Styled.TextareaField>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="text-field__input"
      />
    </Styled.TextareaField>
  );
};

export default TextareaField;
