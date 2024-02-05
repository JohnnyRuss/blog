import { useSearchParams } from "@/hooks/utils";

import { ListHeader, ListArticles } from "./components/List";
import { CreateListModal } from "@/components/Layouts";

const List: React.FC = () => {
  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <ListHeader />

        <ListArticles />
      </div>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default List;
