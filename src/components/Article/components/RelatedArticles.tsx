import { memo } from "react";
import { v4 as uuid } from "uuid";

import { useGetRelatedArticles } from "@/hooks/api/articles";

import {
  SectionTitle,
  ArticleCardBig,
  ArticleCardBigSkeleton,
} from "@/components/Layouts";
import * as Styled from "./styles/relatedArticles.styled";

const RelatedArticles: React.FC = memo(() => {
  const { data, status } = useGetRelatedArticles();

  return (
    <Styled.RelatedArticles>
      <SectionTitle title="Related Articles" />

      <div className="articles-container">
        {status.loading
          ? Array.from(new Array(4)).map(() => (
              <ArticleCardBigSkeleton key={uuid()} size="small" />
            ))
          : data.map((article) => (
              <ArticleCardBig key={article._id} article={article} />
            ))}
      </div>
    </Styled.RelatedArticles>
  );
});

export default RelatedArticles;
