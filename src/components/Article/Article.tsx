/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useUserTraceQuery } from "@/hooks/api/userTrace";
import { useReadArticleQuery } from "@/hooks/api/articles";

import * as Styled from "./article.styled";
import ArticleHead from "./components/ArticleHead";
import RelatedArticles from "./components/RelatedArticles";

import {
  QuillEditor,
  AsidePopularArticles,
  AsideCategories,
} from "@/components/Layouts";

const Article: React.FC = () => {
  const { data } = useReadArticleQuery();
  const updateTrace = useUserTraceQuery();

  useEffect(() => {
    if (!data.slug) return;
    updateTrace(data.slug);
  }, [data.slug]);

  return (
    <Styled.Article>
      <div className="flex-container">
        <div className="article-body">
          <ArticleHead
            author={data.author}
            title={data.title}
            createdAt={data.createdAt}
          />

          <QuillEditor readonly={true} value={data.body} />
        </div>

        <aside className="article-aside">
          <AsidePopularArticles />

          <AsideCategories />
        </aside>
      </div>

      <RelatedArticles />
    </Styled.Article>
  );
};

export default Article;
