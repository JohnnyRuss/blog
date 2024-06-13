import { useSearchParams } from "@/hooks/utils";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import {
  AsideCategories,
  AsideWhoToFollow,
  CreateListModal,
  AsidePopularArticles,
} from "@/components/Layouts";
import * as Styled from "./bog.styled";
import Filter from "./components/Filter";
import ArticlesList from "./components/ArticlesList";

const Blog: React.FC = () => {
  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  return (
    <>
      <Styled.Blog>
        <Filter />

        <div className="blog-content__box">
          <ArticlesList />

          <aside className="blog-aside">
            <AsideCategories />
            {isAuthenticated ? <AsideWhoToFollow /> : <AsidePopularArticles />}
          </aside>
        </div>
      </Styled.Blog>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Blog;
