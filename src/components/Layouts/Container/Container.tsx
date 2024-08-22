import * as Styled from "./container.styled";

type ContainerT = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

const Container: React.FC<ContainerT> = ({ children, ...parentProps }) => {
  return (
    <Styled.Container data-container {...parentProps}>
      <div className="wrapper">{children}</div>
    </Styled.Container>
  );
};

export default Container;
