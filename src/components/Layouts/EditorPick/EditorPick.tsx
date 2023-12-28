import { animateLeft } from "@/styles/animations";
import { useTheme } from "styled-components";

import * as Styled from "./editorPick.styled";
import {
  CategoryChip,
  LineClamp,
  AsideBlockItemContainer,
} from "@/components/Layouts";

type EditorPickT = {};

const EditorPick: React.FC<EditorPickT> = () => {
  const theme = useTheme();

  return (
    <AsideBlockItemContainer
      title="Editors Pick"
      subTitle="Chosen by the editor"
    >
      <Styled.EditorPick
        whileInView="onscreen"
        {...animateLeft({ inView: true, once: true })}
      >
        <li className="editor-pick__item">
          <figure className="editor-pick__item-fig">
            <img
              width={70}
              height={70}
              src="https://images.unsplash.com/photo-1542062700-9b61ccbc1696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="style"
            />
          </figure>

          <div className="editor-pick__item-content">
            <CategoryChip bgColor="#01415B" title="Style" size="sm" />

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

            <div className="editor-pick__item-footer">
              <span className="editor-pick__item-footer--author">
                Karen Souza
              </span>
              &mdash;
              <span className="editor-pick__item-footer--date">20.11.2023</span>
            </div>
          </div>
        </li>

        <li className="editor-pick__item">
          <figure className="editor-pick__item-fig">
            <img
              width={70}
              height={70}
              src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="fashion"
            />
          </figure>

          <div className="editor-pick__item-content">
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

            <div className="editor-pick__item-footer">
              <span className="editor-pick__item-footer--author">
                Kate Bekinsale
              </span>
              &mdash;
              <span className="editor-pick__item-footer--date">27.12.2023</span>
            </div>
          </div>
        </li>

        <li className="editor-pick__item">
          <figure className="editor-pick__item-fig">
            <img
              width={70}
              height={70}
              src="https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8Mjl8fGZvb2R8ZW58MHwwfDB8fHww"
              alt="food"
            />
          </figure>

          <div className="editor-pick__item-content">
            <CategoryChip bgColor="#019587" title="Food" size="sm" />

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

            <div className="editor-pick__item-footer">
              <span className="editor-pick__item-footer--author">
                Gary Coleman
              </span>
              &mdash;
              <span className="editor-pick__item-footer--date">13.10.2023</span>
            </div>
          </div>
        </li>

        <li className="editor-pick__item">
          <figure className="editor-pick__item-fig">
            <img
              width={70}
              height={70}
              src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="culture"
            />
          </figure>

          <div className="editor-pick__item-content">
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

            <div className="editor-pick__item-footer">
              <span className="editor-pick__item-footer--author">
                Saly Obman
              </span>
              &mdash;
              <span className="editor-pick__item-footer--date">28.12.2023</span>
            </div>
          </div>
        </li>
      </Styled.EditorPick>
    </AsideBlockItemContainer>
  );
};

export default EditorPick;
