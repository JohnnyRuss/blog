import CommentsProvider from "@/Providers/CommentsProvider";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useSearchParams, useCommentsPopup } from "@/hooks/utils";

import {
  CommentsPopup,
  AsideCategories,
  CreateListModal,
  AsidePopularArticles,
} from "@/components/Layouts";
import * as Styled from "./bog.styled";
import Filter from "./components/Filter";
import ArticlesList from "./components/ArticlesList";

const Blog: React.FC = () => {
  const { getParam } = useSearchParams();
  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  const isAddingToList = getParam("save") || "";
  const { isOpenedComments, onCloseComments } = useCommentsPopup();

  return (
    <>
      <Styled.Blog>
        <Filter />

        <div className="blog-content__box">
          <ArticlesList />

          <aside className="blog-aside">
            <AsideCategories />

            <AsidePopularArticles showAsForYou={isAuthenticated} />
          </aside>
        </div>
      </Styled.Blog>

      {isAddingToList && <CreateListModal />}

      {isOpenedComments && (
        <CommentsProvider>
          <CommentsPopup
            showCommentsForm={false}
            showCommentOptions={false}
            onClosePopup={onCloseComments}
          />
        </CommentsProvider>
      )}
    </>
  );
};

export default Blog;
