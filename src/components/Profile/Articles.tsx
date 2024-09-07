import CommentsProvider from "@/Providers/CommentsProvider";
import { useSearchParams, useCommentsPopup } from "@/hooks/utils";

import { ArticlesList } from "./components/Articles";
import { CreateListModal, CommentsPopup } from "@/components/Layouts";

const Articles: React.FC = () => {
  const { getParam } = useSearchParams();

  const isAddingToList = getParam("save") || "";
  const { isOpenedComments, onCloseComments } = useCommentsPopup();

  return (
    <>
      <ArticlesList />

      {isOpenedComments && (
        <CommentsProvider>
          <CommentsPopup
            showCommentsForm={false}
            showCommentOptions={false}
            onClosePopup={onCloseComments}
          />
        </CommentsProvider>
      )}

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Articles;
