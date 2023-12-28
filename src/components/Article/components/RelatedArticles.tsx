import * as Styled from "./styles/relatedArticles.styled";
import { ArticleCardBig, SectionTitle } from "@/components/Layouts";

type RelatedArticlesT = {};

const RelatedArticles: React.FC<RelatedArticlesT> = () => {
  return (
    <Styled.RelatedArticles>
      <SectionTitle title="Related Articles" />

      <div className="articles-container">
        <ArticleCardBig />
        <ArticleCardBig />
        <ArticleCardBig />
        <ArticleCardBig />
      </div>
    </Styled.RelatedArticles>
  );
};

export default RelatedArticles;
