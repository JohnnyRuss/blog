import * as Styled from "./styles/articleHead.styled";
import ArticleHeadActions from "./ArticleHeadActions";
import { AuthorIdentifier, CategoryChip } from "@/components/Layouts";

type ArticleSubHeadT = {};

const ArticleSubHead: React.FC<ArticleSubHeadT> = () => {
  return (
    <Styled.ArticleHead>
      <figure className="article-head__fig">
        <img
          width="100%"
          src="https://ik.imagekit.io/ably/ghost/prod/2021/03/socket-io-logo-1.jpeg?tr=w-1728,q-50"
          alt="socket io"
        />
      </figure>

      <div className="article-head__sub">
        <AuthorIdentifier />

        <CategoryChip bgColor="#D92525" title="Coding" size="md" />

        <ArticleHeadActions />
      </div>

      <h3 className="article-head__title">How to use WebSockets in REST API</h3>
    </Styled.ArticleHead>
  );
};

export default ArticleSubHead;
