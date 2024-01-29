import { memo } from "react";
import Skeleton from "react-loading-skeleton";
import { v4 as uuid } from "uuid";

import { animateLeft } from "@/styles/animations";
import { useGetCategoriesQuery } from "@/hooks/api/categories";

import * as Styled from "./categories.styled";
import { CategoryChip, AsideBlockItemContainer } from "@/components/Layouts";

const AsideCategories: React.FC<{ userbased?: "1" | "-1" }> = memo(
  ({ userbased }) => {
    const { data, status } = useGetCategoriesQuery(userbased);

    return (
      <AsideBlockItemContainer
        title="Categories"
        subTitle={
          userbased === "-1" ? "Discover New Topics" : "Discover By Topics"
        }
      >
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
                  size="md"
                  key={category._id}
                  category={category}
                />
              ))}
        </Styled.Categories>
      </AsideBlockItemContainer>
    );
  }
);

export default AsideCategories;
