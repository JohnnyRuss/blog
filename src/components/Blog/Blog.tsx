import * as Styled from "./bog.styled";
import { ArticleCard } from "../Layouts";

type BlogT = {};

const Blog: React.FC<BlogT> = () => {
  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-articles__list">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </Styled.Blog>
  );
};

export default Blog;
