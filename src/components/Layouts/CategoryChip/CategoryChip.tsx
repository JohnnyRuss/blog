import * as Styled from "./chip.styled";

import { CategoryT } from "@/interface/db/category.types";

type CategoryChipT = {
  category: CategoryT;
  size?: "sm" | "md" | "lg";
};

const CategoryChip: React.FC<CategoryChipT> = ({ category, size = "lg" }) => {
  const sizeClass =
    size === "sm"
      ? "size-sm"
      : size === "md"
      ? "size-md"
      : size === "lg"
      ? "size-lg"
      : "";

  return (
    <Styled.CategoryChip
      data-category-chip
      className={sizeClass}
      title={category?.title}
      $bg_color={category?.color}
    >
      {size === "lg" && (
        <figure className="categories__list-item--fig">
          {category.thumbnail ? (
            <img
              width={40}
              height={40}
              src={category?.thumbnail}
              alt={category?.title}
              title={category?.title}
              loading="eager"
            />
          ) : (
            <span>{category?.title?.[0]?.toLocaleUpperCase()}</span>
          )}
        </figure>
      )}

      <span className="categories__list-item--label">{category?.title}</span>
    </Styled.CategoryChip>
  );
};

export default CategoryChip;
