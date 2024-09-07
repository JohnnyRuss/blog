import { listsStore } from "@/store";
import { useCommentsPopup, useSearchParams } from "@/hooks/utils";
import { useGetSavedArticlesIdsQuery } from "@/hooks/api/lists";

import CommentsProvider from "@/Providers/CommentsProvider";
import { ListHeader, ListArticles } from "./components/List";
import { CommentsPopup, CreateListModal } from "@/components/Layouts";

const List: React.FC = () => {
  useGetSavedArticlesIdsQuery();

  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  const listsStatus = listsStore.use.listArticlesStatus();

  const { isOpenedComments, onCloseComments } = useCommentsPopup();

  return (
    <>
      <div style={{ padding: "1rem" }}>
        {listsStatus.status === "SUCCESS" && <ListHeader />}

        <ListArticles />
      </div>

      {isAddingToList && <CreateListModal />}

      {isOpenedComments && (
        <CommentsProvider>
          <CommentsPopup
            showCommentsForm={false}
            showCommentOptions={false}
            onClosePopup={onCloseComments}
          />
        </CommentsProvider>
      )}
    </>
  );
};

export default List;
