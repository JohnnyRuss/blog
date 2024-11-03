import { CategoryT } from "@/interface/db/category.types";
import { AddUserInterestArgsT } from "@/interface/db/user.types";

type SearchInterestsItemT = {
  loading: boolean;
  category: CategoryT;
  intersectingCategories: Array<string>;
  onAddInterest: (args: AddUserInterestArgsT) => void;
};

const SearchInterestsItem: React.FC<SearchInterestsItemT> = ({
  loading,
  category,
  onAddInterest,
  intersectingCategories,
}) => {
  return (
    <li
      aria-disabled={loading}
      style={{ background: category.color }}
      onClick={() => onAddInterest({ categoryId: category._id })}
      className={
        intersectingCategories.includes(category._id) ? "selected" : ""
      }
    >
      <span>{category.title}</span>

      <figure>
        <img src={category.thumbnail} alt={category.title} />
      </figure>
    </li>
  );
};

export default SearchInterestsItem;
