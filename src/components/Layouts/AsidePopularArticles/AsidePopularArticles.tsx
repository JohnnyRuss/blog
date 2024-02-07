import { generateArray } from "@/utils";
import { useGetPopularArticles } from "@/hooks/api/articles";

import * as Styled from "./popularArticles.styled";
import PopularArticleCard from "./PopularArticleCard";
import PopularArticleCardSkeleton from "./PopularArticleCardSkeleton";
import { AsideBlockItemContainer, ErrorMessage } from "@/components/Layouts";

const AsidePopularArticles: React.FC = () => {
  const { data, status } = useGetPopularArticles();

  return (
    <AsideBlockItemContainer title="Most Popular" subTitle="What's hot">
      <Styled.PopularArticles>
        {status.loading ? (
          generateArray(4).map((id) => <PopularArticleCardSkeleton key={id} />)
        ) : status.status === "SUCCESS" ? (
          data.map((article) => (
            <PopularArticleCard key={article._id} article={article} />
          ))
        ) : (
          <ErrorMessage message={status.message} align="center" size="md" />
        )}
      </Styled.PopularArticles>
    </AsideBlockItemContainer>
  );
};

export default AsidePopularArticles;
