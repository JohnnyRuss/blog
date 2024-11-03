/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useSearchParams } from "@/hooks/utils";
import { useUserTraceQuery } from "@/hooks/api/userTrace";
import { useReadArticleQuery } from "@/hooks/api/articles";
import { useGetSavedArticlesIdsQuery } from "@/hooks/api/lists";
import { useCheckIsFollowingUserQuery } from "@/hooks/api/userFollow";
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

  useGetSavedArticlesIdsQuery();

  const { check, isFollowingUser } = useCheckIsFollowingUserQuery(
    data.author._id
  );

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
              <UI.ArticleHead
                checkIsFollowingUser={check}
                isFollowingUser={isFollowingUser}
              />
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

            <div className="article-footer--actions">
              <div className="article-actions--bar">
                <UI.ArticleHeadActions
                  showFollowButton={false}
                  checkIsFollowingUser={check}
                  isFollowingUser={isFollowingUser}
                />
              </div>

              <CommentsProvider>
                <Comments />
              </CommentsProvider>
            </div>
          </div>

          <aside className="article-aside">
            <AsidePopularArticles />

            <AsideCategories userbased="-1" />
          </aside>
        </div>

        <UI.RelatedArticles />
      </Styled.Article>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Article;
