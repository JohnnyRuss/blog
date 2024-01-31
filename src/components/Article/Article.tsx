/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useUserTraceQuery } from "@/hooks/api/userTrace";
import { useReadArticleQuery } from "@/hooks/api/articles";

import * as UI from "./components";
import * as Styled from "./article.styled";

import {
  QuillEditor,
  AsidePopularArticles,
  AsideCategories,
} from "@/components/Layouts";

const Article: React.FC = () => {
  const { data, status } = useReadArticleQuery();
  const updateTrace = useUserTraceQuery();

  useEffect(() => {
    if (!data.slug) return;
    updateTrace(data.slug);
  }, [data.slug]);

  return (
    <Styled.Article>
      <div className="flex-container">
        <div className="article-body">
          {status.loading ? <UI.ArticleHeadSkeleton /> : <UI.ArticleHead />}

          {status.loading ? (
            <UI.ArticleBodySkeleton />
          ) : (
            <QuillEditor readonly={true} value={data.body} />
          )}
        </div>

        <aside className="article-aside">
          <AsidePopularArticles />

          <AsideCategories userbased="-1" />
        </aside>
      </div>

      <UI.RelatedArticles />
    </Styled.Article>
  );
};

export default Article;
