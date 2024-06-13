import { useSearchParams } from "@/hooks/utils";
import { useGetSavedArticlesIdsQuery } from "@/hooks/api/lists";

import { CreateListModal } from "@/components/Layouts";
import { ListHeader, ListArticles } from "./components/List";

const List: React.FC = () => {
  useGetSavedArticlesIdsQuery();

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
