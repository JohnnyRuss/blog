import styled from "styled-components";

type LineClampT = {
  clamp?: number;
  children: React.ReactNode;
  sx?: React.CSSProperties;
  component?: keyof JSX.IntrinsicElements;
};

const LineClampedBox = styled.div<{ clamp: number }>`
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${({ clamp }) => clamp};
`;

const LineClamp: React.FC<LineClampT> = ({
  children,
  sx = {},
  clamp = 1,
  component = "div",
}) => {
  return (
    <LineClampedBox as={component} clamp={clamp} style={sx} data-line-clamp>
      {children}
    </LineClampedBox>
  );
};

export default LineClamp;
