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
          <img
            src={list.privacy === "PRIVATE" ? PrivateIcon : PublicIcon}
            alt={list.privacy}
            title={list.privacy}
            width={20}
            height={20}
            loading="eager"
          />
        </span>
      </label>
    </li>
  );
};

export default ListItem;
