import * as Styled from "./container.styled";

type ContainerT = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerT> = ({ children }) => {
  return (
    <Styled.Container>
      <div className="wrapper">{children}</div>
    </Styled.Container>
  );
};

export default Container;
