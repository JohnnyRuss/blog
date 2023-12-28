import * as Styled from "./styles/relatedArticles.styled";
import { ArticleCard, SectionTitle } from "@/components/Layouts";

type RelatedArticlesT = {};

const RelatedArticles: React.FC<RelatedArticlesT> = () => {
  return (
    <Styled.RelatedArticles>
      <SectionTitle title="Related Articles" />

      <div className="articles-container">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </Styled.RelatedArticles>
  );
};

export default RelatedArticles;
