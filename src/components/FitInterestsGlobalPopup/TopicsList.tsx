import { CategoryT } from "@/interface/db/category.types";
import TopicsListItem from "./TopicsListItem";

type TopicsListT = {
  search: string;
  data: Array<CategoryT>;
  chosenTopics: Array<string>;
  onAddTopic: (categoryId: string) => void;
};

const TopicsList: React.FC<TopicsListT> = ({
  data,
  search,
  onAddTopic,
  chosenTopics,
}) => {
  return (
    <ul className="topics-list">
      {[...data]
        .filter((topic) => filterTopics(topic.title, search))
        .map((topic) => (
          <TopicsListItem
            key={topic._id}
            topic={topic}
            onAddTopic={onAddTopic}
            isActive={chosenTopics.includes(topic._id)}
          />
        ))}
    </ul>
  );
};

export default TopicsList;

function filterTopics(target: string, search: string) {
  return search
    ? target.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
    : true;
}
