import {
  ArticleCardMedium,
  Categories,
  PopularArticles,
  EditorPick,
} from "@/components/Layouts";
import * as Styled from "./bog.styled";

type BlogT = {};

const Blog: React.FC<BlogT> = () => {
  return (
    <Styled.Blog>
      <div>Filter</div>
      <div className="blog-content__box">
        <div className="blog-articles__list">
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
          <ArticleCardMedium />
        </div>
        <aside className="blog-aside">
          <PopularArticles />

          <div className="blog-aside__sticky">
            <Categories />

            <EditorPick />
          </div>
        </aside>
      </div>
    </Styled.Blog>
  );
};

export default Blog;
