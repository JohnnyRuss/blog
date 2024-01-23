import * as Styled from "./chip.styled";

type CategoryChipT = {
  img?: string;
  title: string;
  bgColor: string;
  size?: "sm" | "md" | "lg";
};

const CategoryChip: React.FC<CategoryChipT> = ({
  img,
  title,
  bgColor,
  size = "lg",
}) => {
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
      $bg_color={bgColor}
      className={sizeClass}
      title={title}
      data-category-chip
    >
      {img && (
        <figure className="categories__list-item--fig">
          <img
            width={40}
            height={40}
            src={img}
            alt={title}
            title={title}
            loading="eager"
          />
        </figure>
      )}

      <span className="categories__list-item--label">{title}</span>
    </Styled.CategoryChip>
  );
};

export default CategoryChip;
