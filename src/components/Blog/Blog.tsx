import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as Styled from "./bog.styled";
import ArticlesList from "./ArticlesList";
import {
  AsideCategories,
  AsideWhoToFollow,
  AsidePopularArticles,
} from "@/components/Layouts";

const Blog: React.FC = () => {
  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-content__box">
        <ArticlesList />

        <aside className="blog-aside">
          <AsideCategories />
          {isAuthenticated ? <AsideWhoToFollow /> : <AsidePopularArticles />}
        </aside>
      </div>
    </Styled.Blog>
  );
};

export default Blog;
