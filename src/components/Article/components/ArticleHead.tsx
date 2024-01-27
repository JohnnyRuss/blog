import * as Styled from "./styles/articleHead.styled";
import ArticleHeadActions from "./ArticleHeadActions";

import { AuthorIdentifier, CategoryChip } from "@/components/Layouts";

import { ArticleAuthorT } from "@/interface/db/article.types";

type ArticleSubHeadT = {
  author: ArticleAuthorT;
  title: string;
  createdAt: string;
};

const ArticleSubHead: React.FC<ArticleSubHeadT> = ({
  author,
  title,
  createdAt,
}) => {
  return (
    <Styled.ArticleHead>
      <div className="article-head__sub">
        <AuthorIdentifier
          date={createdAt}
          userId={author._id}
          avatar={author.avatar}
          fullname={author.fullname}
        />

        <CategoryChip bgColor="#D92525" title="Coding" size="md" />

        <ArticleHeadActions />
      </div>

      <h3 className="article-head__title">{title}</h3>
    </Styled.ArticleHead>
  );
};

export default ArticleSubHead;
