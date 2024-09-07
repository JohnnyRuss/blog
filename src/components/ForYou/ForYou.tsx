import { useSearchParams, useCommentsPopup } from "@/hooks/utils";
import CommentsProvider from "@/Providers/CommentsProvider";

import {
  AsideCategories,
  CreateListModal,
  AsideRecentlySaved,
  CommentsPopup,
} from "@/components/Layouts";
import ArticlesList from "./ArticlesList";
import * as Styled from "./forYou.styled";

type ForYouT = {};

const ForYou: React.FC<ForYouT> = () => {
  const { getParam } = useSearchParams();

  const isAddingToList = getParam("save") || "";
  const { isOpenedComments, onCloseComments } = useCommentsPopup();

  return (
    <>
      <Styled.ForYou>
        <div className="for-you__content-box">
          <ArticlesList />

          <aside className="for-you__aside">
            <AsideCategories userbased="-1" />

            <AsideRecentlySaved />
          </aside>
        </div>
      </Styled.ForYou>

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

export default ForYou;
