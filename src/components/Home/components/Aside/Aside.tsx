import * as Styled from "./aside.styled";
import { AsidePopularArticles, AsideEditorPick } from "@/components/Layouts";

type AsideT = {};

const Aside: React.FC<AsideT> = () => {
  return (
    <Styled.Aside>
      <AsidePopularArticles />

      <AsideEditorPick />
    </Styled.Aside>
  );
};

export default Aside;
