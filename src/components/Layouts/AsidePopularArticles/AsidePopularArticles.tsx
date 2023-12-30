import { useTheme } from "styled-components";
import { animateLeft } from "@/styles/animations";

import {
  LineClamp,
  CategoryChip,
  AsideBlockItemContainer,
} from "@/components/Layouts";
import * as Styled from "./populars.styled";

type AsidePopularArticlesT = {};

const AsidePopularArticles: React.FC<AsidePopularArticlesT> = () => {
  const theme = useTheme();

  return (
    <AsideBlockItemContainer title="Most Popular" subTitle="What's hot">
      <Styled.PopularArticles {...animateLeft({ inView: true, once: true })}>
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
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores, accusantium quod, ea exercitationem molestiae fugit suscipit facilis, aut sunt ipsa molestias cupiditate? Perspiciatis ipsam aliquam laboriosam porro consequuntur est."
          />

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
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores, accusantium quod, ea exercitationem molestiae fugit suscipit facilis, aut sunt ipsa molestias cupiditate? Perspiciatis ipsam aliquam laboriosam porro consequuntur est."
          />

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
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores, accusantium quod, ea exercitationem molestiae fugit suscipit facilis, aut sunt ipsa molestias cupiditate? Perspiciatis ipsam aliquam laboriosam porro consequuntur est."
          />

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
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores, accusantium quod, ea exercitationem molestiae fugit suscipit facilis, aut sunt ipsa molestias cupiditate? Perspiciatis ipsam aliquam laboriosam porro consequuntur est."
          />

          <div className="popular-item__footer">
            <span className="popular-item__footer-author">Tom Odel</span>
            &mdash;
            <span className="popular-item__footer-date">27.12.2023</span>
          </div>
        </li>
      </Styled.PopularArticles>
    </AsideBlockItemContainer>
  );
};

export default AsidePopularArticles;
