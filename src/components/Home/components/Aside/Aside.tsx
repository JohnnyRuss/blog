import * as Styled from "./aside.styled";
import { PopularArticles, Categories, EditorPick } from "@/components/Layouts";

type AsideT = {};

const Aside: React.FC<AsideT> = () => {
  return (
    <Styled.Aside>
      <PopularArticles />

      <Categories />

      <EditorPick />
    </Styled.Aside>
  );
};

export default Aside;
