import ArticlesList from "./ArticlesList";

import { AsideCategories, AsideRecentlySaved } from "@/components/Layouts";
import * as Styled from "./forYou.styled";

type ForYouT = {};

const ForYou: React.FC<ForYouT> = () => {
  return (
    <Styled.ForYou>
      <div>Filter</div>

      <div className="for-you__content-box">
        <ArticlesList />

        <aside className="for-you__aside">
          <AsideCategories userbased="-1" />

          <AsideRecentlySaved />
        </aside>
      </div>
    </Styled.ForYou>
  );
};

export default ForYou;
