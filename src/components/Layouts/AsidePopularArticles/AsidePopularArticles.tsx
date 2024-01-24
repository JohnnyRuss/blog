import { AsideBlockItemContainer } from "@/components/Layouts";
import * as Styled from "./populars.styled";
import PopularArticleCard from "./PopularArticleCard";

import { ArticleShortT } from "@/interface/db/article.types";

type AsidePopularArticlesT = {
  articles: Array<ArticleShortT>;
};

const AsidePopularArticles: React.FC<AsidePopularArticlesT> = ({
  articles,
}) => {
  return (
    <AsideBlockItemContainer title="Most Popular" subTitle="What's hot">
      <Styled.PopularArticles>
        {articles.map((article) => (
          <PopularArticleCard key={article._id} article={article} />
        ))}
      </Styled.PopularArticles>
    </AsideBlockItemContainer>
  );
};

export default AsidePopularArticles;
