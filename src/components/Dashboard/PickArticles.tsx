import { v4 as uuid } from "uuid";

import { useArticlesQuery } from "@/hooks/api/dashboard";

import * as Styled from "./styles/articles.styled";
import ArticleItem from "./components/ArticleItem";
import { ArticleCardMediumSkeleton } from "../Layouts";

const PickArticles: React.FC = () => {
  const { data, status } = useArticlesQuery();

  return (
    <Styled.Articles>
      {status.loading
        ? Array.from(new Array(6)).map(() => (
            <ArticleCardMediumSkeleton key={uuid()} />
          ))
        : data.map((article) => (
            <ArticleItem key={article._id} article={article} />
          ))}
    </Styled.Articles>
  );
};

export default PickArticles;
