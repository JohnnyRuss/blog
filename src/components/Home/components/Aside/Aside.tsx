import * as Styled from "./aside.styled";
import MostPopular from "./Popular/MostPopular";
import EditorPick from "./EditorPick/EditorPick";
import Categories from "./Categories/Categories";
import AsideBlockItemContainer from "./AsideBlockItemContainer";

type AsideT = {};

const Aside: React.FC<AsideT> = () => {
  return (
    <Styled.Aside>
      <AsideBlockItemContainer title="Most Popular" subTitle="What's hot">
        <MostPopular />
      </AsideBlockItemContainer>

      <AsideBlockItemContainer title="Categories" subTitle="Discover by topics">
        <Categories />
      </AsideBlockItemContainer>

      <AsideBlockItemContainer
        title="Editors Pick"
        subTitle="Chosen by the editor"
      >
        <EditorPick />
      </AsideBlockItemContainer>
    </Styled.Aside>
  );
};

export default Aside;
