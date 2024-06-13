import { memo } from "react";

import { generateArray } from "@/utils";
import { useGetRelatedArticlesQuery } from "@/hooks/api/articles";

import {
  ErrorMessage,
  SectionTitle,
  ArticleCardBig,
  ArticleCardBigSkeleton,
} from "@/components/Layouts";
import * as Styled from "./styles/relatedArticles.styled";

const RelatedArticles: React.FC = memo(() => {
  const { data, status } = useGetRelatedArticlesQuery();

  return (
    <Styled.RelatedArticles>
      <SectionTitle title="Related Articles" />

      <div className="articles-container">
        {status.loading ? (
          generateArray(4).map((id) => (
            <ArticleCardBigSkeleton key={id} size="small" />
          ))
        ) : status.status === "SUCCESS" ? (
          data.map((article) => (
            <ArticleCardBig key={article._id} article={article} />
          ))
        ) : (
          <ErrorMessage message={status.message} align="center" size="md" />
        )}
      </div>
    </Styled.RelatedArticles>
  );
});

export default RelatedArticles;
