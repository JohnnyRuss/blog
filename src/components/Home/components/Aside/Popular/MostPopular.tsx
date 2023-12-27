import { useTheme } from "styled-components";
import { animateLeft } from "@/styles/animations";

import * as Styled from "./populars.styled";
import { CategoryChip, LineClamp } from "@/components/Layouts";

type MostPopularT = {};

const MostPopular: React.FC<MostPopularT> = () => {
  const theme = useTheme();

  return (
    <Styled.MostPopular
      whileInView="onscreen"
      {...animateLeft({ inView: true })}
    >
      <li className="popular-item">
        <CategoryChip bgColor="#FFAE00" title="Travel" size="sm" />

        <LineClamp
          clamp={2}
          sx={{
            fontSize: theme.fontSize.sm,
            color:
              theme.mode === "dark"
                ? theme.colors.gray
                : theme.colors.gray_dark,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          saepe amet. Accusantium, nulla quam sed placeat, vero doloremque porro
          asperiores laborum beatae odio quasi architecto qui praesentium
        </LineClamp>

        <div className="popular-item__footer">
          <span className="popular-item__footer-author">Tom Odel</span>
          &mdash;
          <span className="popular-item__footer-date">27.12.2023</span>
        </div>
      </li>

      <li className="popular-item">
        <CategoryChip bgColor="#B33F00" title="Culture" size="sm" />

        <LineClamp
          clamp={2}
          sx={{
            fontSize: theme.fontSize.sm,
            color:
              theme.mode === "dark"
                ? theme.colors.gray
                : theme.colors.gray_dark,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          saepe amet. Accusantium, nulla quam sed placeat, vero doloremque porro
          asperiores laborum beatae odio quasi architecto qui praesentium
        </LineClamp>

        <div className="popular-item__footer">
          <span className="popular-item__footer-author">Tom Odel</span>
          &mdash;
          <span className="popular-item__footer-date">27.12.2023</span>
        </div>
      </li>

      <li className="popular-item">
        <CategoryChip bgColor="#D92525" title="Coding" size="sm" />

        <LineClamp
          clamp={2}
          sx={{
            fontSize: theme.fontSize.sm,
            color:
              theme.mode === "dark"
                ? theme.colors.gray
                : theme.colors.gray_dark,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          saepe amet. Accusantium, nulla quam sed placeat, vero doloremque porro
          asperiores laborum beatae odio quasi architecto qui praesentium
        </LineClamp>

        <div className="popular-item__footer">
          <span className="popular-item__footer-author">Tom Odel</span>
          &mdash;
          <span className="popular-item__footer-date">27.12.2023</span>
        </div>
      </li>

      <li className="popular-item">
        <CategoryChip bgColor="#005148" title="Fashion" size="sm" />

        <LineClamp
          clamp={2}
          sx={{
            fontSize: theme.fontSize.sm,
            color:
              theme.mode === "dark"
                ? theme.colors.gray
                : theme.colors.gray_dark,
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita,
          saepe amet. Accusantium, nulla quam sed placeat, vero doloremque porro
          asperiores laborum beatae odio quasi architecto qui praesentium
        </LineClamp>

        <div className="popular-item__footer">
          <span className="popular-item__footer-author">Tom Odel</span>
          &mdash;
          <span className="popular-item__footer-date">27.12.2023</span>
        </div>
      </li>
    </Styled.MostPopular>
  );
};

export default MostPopular;
