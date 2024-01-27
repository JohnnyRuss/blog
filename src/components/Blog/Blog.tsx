import * as Styled from "./bog.styled";
import ArticlesList from "./ArticlesList";
import { AsideCategories, AsideWhoToFollow } from "@/components/Layouts";

const Blog: React.FC = () => {
  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-content__box">
        <ArticlesList />

        <aside className="blog-aside">
          <AsideCategories />

          <AsideWhoToFollow />
        </aside>
      </div>
    </Styled.Blog>
  );
};

export default Blog;
