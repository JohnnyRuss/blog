import { generateArray } from "@/utils";
import { useGetEditorPickedArticles } from "@/hooks/api/articles";

import * as Styled from "./editorPick.styled";
import EditorPickedArticleCard from "./EditorPickedArticleCard";
import EditorPickedArticleCardSkeleton from "./EditorPickedArticleCardSkeleton";
import { AsideBlockItemContainer, ErrorMessage } from "@/components/Layouts";

const AsideEditorPick: React.FC = () => {
  const { data, status } = useGetEditorPickedArticles();

  return (
    <AsideBlockItemContainer
      title="Editors Pick"
      subTitle="Chosen by the editor"
    >
      <Styled.EditorPick data-editors-pick>
        {status.loading ? (
          generateArray(4).map((id) => (
            <EditorPickedArticleCardSkeleton key={id} />
          ))
        ) : status.status === "SUCCESS" ? (
          data.map((article) => (
            <EditorPickedArticleCard key={article._id} article={article} />
          ))
        ) : (
          <ErrorMessage message={status.message} align="center" size="md" />
        )}
      </Styled.EditorPick>
    </AsideBlockItemContainer>
  );
};

export default AsideEditorPick;
