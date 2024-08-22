import { useSearchParams } from "@/hooks/utils";
import { useGetSavedArticlesIdsQuery } from "@/hooks/api/lists";
import { listsStore } from "@/store";

import { CreateListModal } from "@/components/Layouts";
import { ListHeader, ListArticles } from "./components/List";

const List: React.FC = () => {
  useGetSavedArticlesIdsQuery();

  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  const listsStatus = listsStore.use.listArticlesStatus();

  return (
    <>
      <div style={{ padding: "1rem" }}>
        {listsStatus.status === "SUCCESS" && <ListHeader />}

        <ListArticles />
      </div>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default List;
