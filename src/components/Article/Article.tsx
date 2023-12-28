import * as Styled from "./article.styled";
import ArticleHead from "./components/ArticleHead";
import RelatedArticles from "./components/RelatedArticles";
import { QuillEditor, PopularArticles, Categories } from "@/components/Layouts";

type ArticleT = {};

const Article: React.FC<ArticleT> = () => {
  const x = localStorage.getItem("post");
  const quillValue = x ? JSON.parse(x) : "";

  return (
    <Styled.Article>
      <ArticleHead />

      <div className="article-body">
        <div className="editor-box">
          <QuillEditor readonly={true} defaultValue={quillValue} />
        </div>

        <aside className="article-aside">
          <PopularArticles />

          <Categories />
        </aside>
      </div>

      <RelatedArticles />
    </Styled.Article>
  );
};

export default Article;
