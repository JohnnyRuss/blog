import { CheckBox } from "@/components/Layouts";
import PrivateIcon from "@/assets/icons/private.svg";
import PublicIcon from "@/assets/icons/public.svg";

import { ListShortT } from "@/interface/db/list.types";

type ListItemT = {
  list: ListShortT;
  articleId: string;
  onAddToList: () => void;
};

const ListItem: React.FC<ListItemT> = ({ list, articleId, onAddToList }) => {
  return (
    <li className="lists-row__item" onClick={onAddToList}>
      <label htmlFor="">
        <CheckBox
          checked={list.articles.some(
            (article) => article.article === articleId
          )}
        />
        <span>{list.title}</span>
        <span className="privacy-icon">
          {list.privacy === "PRIVATE" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 10v10h13V10zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-2 0V7a4 4 0 0 0-8 0v1zm-9 3h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
              />
            </svg>
          )}
        </span>
      </label>
    </li>
  );
};

export default ListItem;
