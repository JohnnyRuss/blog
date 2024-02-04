import { articleStore } from "@/store";

import * as Styled from "./styles/articleHead.styled";
import ArticleHeadActions from "./ArticleHeadActions";
import { AuthorIdentifier, CategoryChip } from "@/components/Layouts";

const ArticleSubHead: React.FC = () => {
  const article = articleStore.use.article();

  return (
    <Styled.ArticleHead>
      <div className="article-head__sub">
        <AuthorIdentifier date={article.createdAt} author={article.author} />

        <CategoryChip category={article.categories[0]} size="md" />

        <ArticleHeadActions />
      </div>

      <h3 className="article-head__title">{article.title}</h3>
    </Styled.ArticleHead>
  );
};

export default ArticleSubHead;
