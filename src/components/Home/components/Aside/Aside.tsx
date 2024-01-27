import * as Styled from "./aside.styled";
import { AsidePopularArticles, AsideEditorPick } from "@/components/Layouts";

const Aside: React.FC = () => {
  return (
    <Styled.Aside>
      <AsidePopularArticles />

      <AsideEditorPick />
    </Styled.Aside>
  );
};

export default Aside;
