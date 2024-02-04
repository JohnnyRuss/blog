import { ListHeader, ListArticles } from "./components/List";

const List: React.FC = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <ListHeader />
      <ListArticles />
    </div>
  );
};

export default List;
