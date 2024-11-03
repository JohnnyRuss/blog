import { Text } from "@/components/Layouts";
import { ComponentProps } from "react";
import styled from "styled-components";

type LineClampT = {
  clamp?: number;
  text: string;
  showEmptyLines?: boolean;
  sx?: React.CSSProperties;
  component?: keyof JSX.IntrinsicElements;
  showAsTitle?: boolean;
} & ComponentProps<"div">;

const LineClampedBox = styled.div<{ $clamp: number }>`
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${({ $clamp }) => $clamp};
  width: 100%;
  max-width: 100%;
`;

const LineClamp: React.FC<LineClampT> = ({
  text,
  sx = {},
  clamp = 1,
  component = "div",
  showEmptyLines = false,
  showAsTitle = false,
}) => {
  return (
    <LineClampedBox
      style={sx}
      as={component}
      $clamp={clamp}
      title={showAsTitle ? text : ""}
      data-line-clamp
    >
      <Text text={text} showEmptyLines={showEmptyLines} />
    </LineClampedBox>
  );
};

export default LineClamp;
