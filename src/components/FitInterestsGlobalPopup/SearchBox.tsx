import { Search } from "@/components/Layouts/Icons";

type SearchT = {
  chosenTopicsCount: number;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBox: React.FC<SearchT> = ({ chosenTopicsCount, setSearch }) => {
  return (
    <div className="fit-interests__sub-header">
      <div className="fit-interests__search-box">
        <Search />

        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="education, science, sport ..."
        />
      </div>

      {chosenTopicsCount > 0 && (
        <span>You choose {chosenTopicsCount} topics</span>
      )}
    </div>
  );
};

export default SearchBox;
