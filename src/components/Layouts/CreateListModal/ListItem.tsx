import { CheckBox } from "@/components/Layouts";
import PrivateIcon from "@/assets/icons/private.svg";
import PublicIcon from "@/assets/icons/public.svg";

import { ListShortT } from "@/interface/db/list.types";

type ListItemT = {
  list: ListShortT;
  articleId: string;
};

const ListItem: React.FC<ListItemT> = ({ list, articleId }) => {
  return (
    <li className="lists-row__item">
      <label htmlFor="">
        <CheckBox checked={list.articles.includes(articleId)} />
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
