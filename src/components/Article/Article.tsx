/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useSearchParams } from "@/hooks/utils";
import { useUserTraceQuery } from "@/hooks/api/userTrace";
import { useReadArticleQuery } from "@/hooks/api/articles";
import CommentsProvider from "@/Providers/CommentsProvider";

import * as UI from "./components";
import * as Styled from "./article.styled";

import {
  ErrorMessage,
  QuillEditor,
  CreateListModal,
  Comments,
  AsideCategories,
  AsidePopularArticles,
} from "@/components/Layouts";

const Article: React.FC = () => {
  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  const { data, status } = useReadArticleQuery();
  const updateTrace = useUserTraceQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    if (!data.slug) return;

    updateTrace(data.slug);
  }, [data.slug]);

  return (
    <>
      <Styled.Article>
        <div className="flex-container">
          <div className="article-body">
            {status.loading ? (
              <UI.ArticleHeadSkeleton />
            ) : status.status === "SUCCESS" ? (
              <UI.ArticleHead />
            ) : (
              <></>
            )}

            {status.loading ? (
              <UI.ArticleBodySkeleton />
            ) : status.status === "SUCCESS" ? (
              <QuillEditor readonly={true} value={data.body} />
            ) : (
              <></>
            )}

            {status.status === "FAIL" && (
              <ErrorMessage message={status.message} align="center" size="md" />
            )}
          </div>

          <aside className="article-aside">
            <AsidePopularArticles />

            <AsideCategories userbased="-1" />
          </aside>
        </div>

        <div className="article-footer--actions">
          <div className="article-actions--bar">
            <UI.ArticleHeadActions showFollowButton={false} />
          </div>

          <CommentsProvider>
            <Comments />
          </CommentsProvider>
        </div>

        <UI.RelatedArticles />
      </Styled.Article>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Article;
