import { memo } from "react";
import Skeleton from "react-loading-skeleton";
import { v4 as uuid } from "uuid";

import { animateLeft } from "@/styles/animations";
import { useGetCategoriesQuery } from "@/hooks/api/categories";

import * as Styled from "./categories.styled";
import { CategoryChip, AsideBlockItemContainer } from "@/components/Layouts";

const AsideCategories: React.FC = memo(() => {
  const { data, status } = useGetCategoriesQuery();

  return (
    <AsideBlockItemContainer title="Categories" subTitle="Discover by topics">
      <Styled.Categories
        data-aside-categories
        {...animateLeft({ inView: true, once: true })}
      >
        {status.loading
          ? Array.from(new Array(6)).map(() => (
              <Skeleton width="150px" height="40px" key={uuid()} />
            ))
          : data.map((category) => (
              <CategoryChip
                key={category._id}
                bgColor={category.color}
                title={category.title}
                size="md"
              />
            ))}
      </Styled.Categories>
    </AsideBlockItemContainer>
  );
});

export default AsideCategories;
