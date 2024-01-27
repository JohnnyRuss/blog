import { v4 as uuid } from "uuid";

import { useGetPopularArticles } from "@/hooks/api/articles";

import * as Styled from "./populars.styled";
import PopularArticleCard from "./PopularArticleCard";
import PopularArticleCardSkeleton from "./PopularArticleCardSkeleton";
import { AsideBlockItemContainer } from "@/components/Layouts";

const AsidePopularArticles: React.FC = () => {
  const { data, status } = useGetPopularArticles();

  return (
    <AsideBlockItemContainer title="Most Popular" subTitle="What's hot">
      <Styled.PopularArticles>
        {status.loading
          ? Array.from(new Array(4)).map(() => (
              <PopularArticleCardSkeleton key={uuid()} />
            ))
          : data.map((article) => (
              <PopularArticleCard key={article._id} article={article} />
            ))}
      </Styled.PopularArticles>
    </AsideBlockItemContainer>
  );
};

export default AsidePopularArticles;
