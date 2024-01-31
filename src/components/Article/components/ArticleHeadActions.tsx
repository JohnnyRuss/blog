import { articleStore } from "@/store";

import * as Styled from "./styles/articleHeadActions.styled";
import { FollowButton } from "@/components/Layouts";

const ArticleHeadActions: React.FC = () => {
  const article = articleStore.use.article();

  return (
    <Styled.ArticleHeadActions>
      <FollowButton />

      <div className="actions-item views">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M3 13c3.6-8 14.4-8 18 0" />
            <path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
          </g>
        </svg>

        <span>{article.views}</span>
      </div>

      <button className="actions-item heart active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
        </svg>

        <span>{article.likes.length}</span>
      </button>

      <button className="actions-item bookmark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
        </svg>
      </button>
    </Styled.ArticleHeadActions>
  );
};

export default ArticleHeadActions;
