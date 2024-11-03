import { useEffect, useState } from "react";

import { listsStore } from "@/store";
import CommentsProvider from "@/Providers/CommentsProvider";
import { useSearchParams, useCommentsPopup } from "@/hooks/utils";

import {
  CommentsPopup,
  AsideCategories,
  AsideWhoToFollow,
  CreateListModal,
  AsideRecentlySaved,
} from "@/components/Layouts";
import ArticlesList from "./ArticlesList";
import * as Styled from "./forYou.styled";

type ForYouT = {};

const ForYou: React.FC<ForYouT> = () => {
  const { getParam } = useSearchParams();

  const isAddingToList = getParam("save") || "";
  const { isOpenedComments, onCloseComments } = useCommentsPopup();

  const recentlySavedArticles = listsStore.use.savedArticles();
  const [showWhoToFollow, setShowWhoToFollow] = useState(false);

  useEffect(() => {
    if (recentlySavedArticles.length <= 0 && !showWhoToFollow)
      setShowWhoToFollow(true);
    else if (recentlySavedArticles.length > 0 && showWhoToFollow)
      setShowWhoToFollow(false);
  }, [recentlySavedArticles.length, showWhoToFollow]);

  return (
    <>
      <Styled.ForYou>
        <div className="for-you__content-box">
          <ArticlesList />

          <aside className="for-you__aside">
            <AsideCategories userbased="-1" />

            <AsideRecentlySaved />

            {showWhoToFollow && <AsideWhoToFollow />}
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
