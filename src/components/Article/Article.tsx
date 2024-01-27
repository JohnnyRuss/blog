import { useReadArticleQuery } from "@/hooks/api/articles";

import * as Styled from "./article.styled";
import ArticleHead from "./components/ArticleHead";
import RelatedArticles from "./components/RelatedArticles";

import {
  QuillEditor,
  AsidePopularArticles,
  AsideCategories,
} from "@/components/Layouts";

const Article: React.FC = () => {
  const { data } = useReadArticleQuery();

  return (
    <Styled.Article>
      <ArticleHead
        author={data.author}
        title={data.title}
        createdAt={data.createdAt}
      />

      <div className="article-body">
        <div className="editor-box">
          <QuillEditor readonly={true} value={data.body} />
        </div>

        <aside className="article-aside">
          <AsidePopularArticles />

          <AsideCategories />
        </aside>
      </div>

      <RelatedArticles />
    </Styled.Article>
  );
};

export default Article;
