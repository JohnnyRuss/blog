import { dashboardStore } from "@/store";

import CheckBox from "./CheckBox";
import { ArticleCardMedium } from "@/components/Layouts";

import { ArticleShortT } from "@/interface/db/article.types";

type ArticleItemT = {
  article: ArticleShortT;
};

const ArticleItem: React.FC<ArticleItemT> = ({ article }) => {
  const pickArticle = dashboardStore.use.pickArticle();

  const onPick = () =>
    pickArticle({
      articleId: article._id,
      picked: article.picked ? false : true,
    });

  return (
    <div className="article-card__layover">
      <CheckBox checked={article.picked} onCheck={onPick} />

      <ArticleCardMedium article={article} />
    </div>
  );
};

export default ArticleItem;
