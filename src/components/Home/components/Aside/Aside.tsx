import { homeStore } from "@/store";

import * as Styled from "./aside.styled";
import { AsidePopularArticles, AsideEditorPick } from "@/components/Layouts";

const Aside: React.FC = () => {
  const popularArticles = homeStore.use.popularArticles();
  const editorPickedArticles = homeStore.use.editorsPick();

  return (
    <Styled.Aside>
      <AsidePopularArticles articles={popularArticles} />

      <AsideEditorPick articles={editorPickedArticles} />
    </Styled.Aside>
  );
};

export default Aside;
