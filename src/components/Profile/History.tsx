import { ArticleCardSmall } from "@/components/Layouts";
import * as Styled from "./styles/history.styled";

const History: React.FC = () => {
  return (
    <Styled.History>
      <div className="reading-history__header">
        <p>You can clear your reading history for a fresh start.</p>

        <button>Clear history</button>
      </div>

      <ul className="reading-history__list">
        <ArticleCardSmall />
        <ArticleCardSmall />
        <ArticleCardSmall />
        <ArticleCardSmall />
        <ArticleCardSmall />
        <ArticleCardSmall />
        <ArticleCardSmall />
      </ul>
    </Styled.History>
  );
};

export default History;
