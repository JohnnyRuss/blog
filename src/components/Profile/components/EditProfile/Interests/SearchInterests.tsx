import { userStore } from "@/store";

import { EmptyMessage } from "@/components/Layouts";
import SearchInterestsItem from "./SearchInterestsItem";

import { CategoryT } from "@/interface/db/category.types";
import { AddUserInterestArgsT } from "@/interface/db/user.types";

type SearchInterestsT = {
  search: string;
  isAddingInterest: boolean;
  categories: Array<CategoryT>;
  intersectingCategories: Array<string>;
  onAddInterest: (args: AddUserInterestArgsT) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInterests: React.FC<SearchInterestsT> = ({
  search,
  setSearch,
  categories,
  onAddInterest,
  isAddingInterest,
  intersectingCategories,
}) => {
  const { loading } = userStore.use.addInterestStatus();

  return (
    <div className="user-editable--interests__search-container">
      {isAddingInterest && (
        <>
          <input
            type="text"
            autoFocus={true}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="education, science, movies ..."
          />

          <div className="user-editable--interests__search-container__dropdown">
            {search !== "" ? (
              <ul>
                {categories.map((category) => (
                  <SearchInterestsItem
                    key={category._id}
                    loading={loading}
                    category={category}
                    onAddInterest={onAddInterest}
                    intersectingCategories={intersectingCategories}
                  />
                ))}
              </ul>
            ) : (
              <EmptyMessage message="Please enter your interest" />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchInterests;
