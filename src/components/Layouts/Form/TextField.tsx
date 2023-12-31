import * as Styled from "./form.styled";

type TextFieldT = {};

const TextField: React.FC<TextFieldT> = () => {
  return (
    <Styled.TextField>
      <input type="text" name="" id="" className="text-field__input" />
    </Styled.TextField>
  );
};

export default TextField;
