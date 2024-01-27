import { v4 as uuid } from "uuid";

import { useGetEditorPickedArticles } from "@/hooks/api/articles";

import * as Styled from "./editorPick.styled";
import EditorPickedArticleCard from "./EditorPickedArticleCard";
import EditorPickedArticleCardSkeleton from "./EditorPickedArticleCardSkeleton";
import { AsideBlockItemContainer } from "@/components/Layouts";

const AsideEditorPick: React.FC = () => {
  const { data, status } = useGetEditorPickedArticles();

  return (
    <AsideBlockItemContainer
      title="Editors Pick"
      subTitle="Chosen by the editor"
    >
      <Styled.EditorPick data-editors-pick>
        {status.loading
          ? Array.from(new Array(4)).map(() => (
              <EditorPickedArticleCardSkeleton key={uuid()} />
            ))
          : data.map((article) => (
              <EditorPickedArticleCard key={article._id} article={article} />
            ))}
      </Styled.EditorPick>
    </AsideBlockItemContainer>
  );
};

export default AsideEditorPick;
