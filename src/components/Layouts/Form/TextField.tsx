import * as Styled from "./form.styled";

type TextFieldT = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField: React.FC<TextFieldT> = ({ name, value, onChange }) => {
  return (
    <Styled.TextField>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="text-field__input"
      />
    </Styled.TextField>
  );
};

export default TextField;
