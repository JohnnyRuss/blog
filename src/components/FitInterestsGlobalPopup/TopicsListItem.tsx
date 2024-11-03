import { Check } from "@/components/Layouts/Icons";

import { CategoryT } from "@/interface/db/category.types";

type TopicsListItemT = {
  topic: CategoryT;
  isActive: boolean;
  onAddTopic: (categoryId: string) => void;
};

const TopicsListItem: React.FC<TopicsListItemT> = ({
  topic,
  isActive,
  onAddTopic,
}) => {
  return (
    <li
      onClick={() => onAddTopic(topic._id)}
      className={`topics-list--item ${isActive ? "active" : ""}`}
    >
      <span className="topics-list--item__title">{topic.title}</span>

      {isActive && (
        <span className="topics-list--item__checkbox">
          <Check />
        </span>
      )}
    </li>
  );
};

export default TopicsListItem;
