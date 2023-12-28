import * as Styled from "./aside.styled";
import { PopularArticles, EditorPick } from "@/components/Layouts";

type AsideT = {};

const Aside: React.FC<AsideT> = () => {
  return (
    <Styled.Aside>
      <PopularArticles />

      <EditorPick />
    </Styled.Aside>
  );
};

export default Aside;
