import { generateArray } from "@/utils";
import {
  useGetPopularArticlesQuery,
  useGetAsideForYouArticles,
} from "@/hooks/api/articles";

import * as Styled from "./popularArticles.styled";
import PopularArticleCard from "./PopularArticleCard";
import PopularArticleCardSkeleton from "./PopularArticleCardSkeleton";
import { AsideBlockItemContainer, ErrorMessage } from "@/components/Layouts";

type AsidePopularArticlesT = {
  showAsForYou?: boolean;
};

const AsidePopularArticles: React.FC<AsidePopularArticlesT> = ({
  showAsForYou = false,
}) => {
  const { data: popularArticles, status: popularArticlesStatus } =
    useGetPopularArticlesQuery(!showAsForYou);

  const { data: forYouArticles, status: forYouArticlesStatus } =
    useGetAsideForYouArticles(showAsForYou);

  const data = showAsForYou ? forYouArticles : popularArticles;
  const status = showAsForYou ? forYouArticlesStatus : popularArticlesStatus;

  const title = showAsForYou ? "For You" : "Most Popular";
  const subTitle = showAsForYou ? "Your Interests" : "What's hot";

  return (
    <AsideBlockItemContainer title={title} subTitle={subTitle}>
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
