import * as Styled from "./editorPick.styled";
import EditorPickedArticleCard from "./EditorPickedArticleCard";
import { AsideBlockItemContainer } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type AsideEditorPickT = {
  articles: Array<ArticleShortT>;
};

const AsideEditorPick: React.FC<AsideEditorPickT> = ({ articles }) => {
  return (
    <AsideBlockItemContainer
      title="Editors Pick"
      subTitle="Chosen by the editor"
    >
      <Styled.EditorPick data-editors-pick>
        {articles.map((article) => (
          <EditorPickedArticleCard key={article._id} article={article} />
        ))}
      </Styled.EditorPick>
    </AsideBlockItemContainer>
  );
};

export default AsideEditorPick;
