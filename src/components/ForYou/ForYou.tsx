import { useSearchParams } from "@/hooks/utils";

import {
  AsideCategories,
  CreateListModal,
  AsideRecentlySaved,
} from "@/components/Layouts";
import ArticlesList from "./ArticlesList";
import * as Styled from "./forYou.styled";

type ForYouT = {};

const ForYou: React.FC<ForYouT> = () => {
  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

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
    </>
  );
};

export default ForYou;
