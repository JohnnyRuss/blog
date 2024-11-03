import { SectionTitle } from "@/components/Layouts";
import { Search, SearchX } from "@/components/Layouts/Icons";

type FitInterestsModalHeaderT = {
  isAddingInterest: boolean;
  onStartSearchInterests: () => void;
};

const FitInterestsModalHeader: React.FC<FitInterestsModalHeaderT> = ({
  isAddingInterest,
  onStartSearchInterests,
}) => {
  return (
    <div className="user-editable--interests__header">
      <SectionTitle title="Fit Your Interests" />

      <button className="add-interests__btn" onClick={onStartSearchInterests}>
        {isAddingInterest ? "Close Search" : "Search Your Interests"}

        <span>{isAddingInterest ? <SearchX /> : <Search />}</span>
      </button>
    </div>
  );
};

export default FitInterestsModalHeader;
