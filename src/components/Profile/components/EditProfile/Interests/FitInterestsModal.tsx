import { userStore } from "@/store";

import { Modal, SectionTitle } from "@/components/Layouts";
import SearchInterests from "./SearchInterests";
import UserInterestsList from "./UserInterestsList";

import * as Styled from "./styles/fitInterestsModal.styled";

import {
  useAddUserInterestQuery,
  useRemoveUserInterestQuery,
} from "@/hooks/api/user";
import { useSearchParams } from "@/hooks/utils";

import {
  AddUserInterestArgsT,
  RemoveUserInterestArgsT,
} from "@/interface/db/user.types";
import { CategoryT } from "@/interface/db/category.types";
import FitInterestsModalHeader from "./FitInterestsModalHeader";

type FitInterestsModalT = {
  isAddingInterest: boolean;
  setIsAddingInterest: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  interests: Array<CategoryT>;
  categories: Array<CategoryT>;
};

const FitInterestsModal: React.FC<FitInterestsModalT> = ({
  interests,
  categories,
  search,
  setSearch,
  isAddingInterest,
  setIsAddingInterest,
}) => {
  const { getParam, removeParam } = useSearchParams();

  const recentInterests = userStore.use.recentInterests();

  const isEditingInterests = getParam("interests") === "1";

  const { addInterestQuery } = useAddUserInterestQuery();
  const { removeInterestQuery } = useRemoveUserInterestQuery();

  const intersectingCategories = categories
    .map((c) => c._id)
    .filter((c) =>
      interests
        .concat(recentInterests)
        .map((i) => i._id)
        .includes(c)
    );

  const onCloseEdit = () => {
    setSearch("");
    setIsAddingInterest(false);
    removeParam("search");
    removeParam("interests");
  };

  const onStartSearchInterests = () => {
    setIsAddingInterest((prev) => !prev);
    if (isEditingInterests) {
      setSearch("");
      removeParam("search");
    }
  };

  const onRemoveInterest = (args: RemoveUserInterestArgsT) =>
    removeInterestQuery(args);

  const onAddInterest = (args: AddUserInterestArgsT) => {
    Array.from(new Set(interests.concat(recentInterests))).some(
      (i) => i._id === args.categoryId
    )
      ? removeInterestQuery(args)
      : addInterestQuery(args);
  };

  return (
    <Modal showCloseBtn={true} onClose={onCloseEdit} open={isEditingInterests}>
      <Styled.FitInterestsModal>
        <FitInterestsModalHeader
          isAddingInterest={isAddingInterest}
          onStartSearchInterests={onStartSearchInterests}
        />

        <SearchInterests
          search={search}
          setSearch={setSearch}
          categories={categories}
          onAddInterest={onAddInterest}
          isAddingInterest={isAddingInterest}
          intersectingCategories={intersectingCategories}
        />

        <div className="user-editable--interests__content-container">
          {recentInterests.length > 0 && (
            <div className="user-editable--interests__content-container__recent">
              <SectionTitle title="" subTitle="Recently Added Interests" />

              <UserInterestsList
                expand={true}
                recent={true}
                editable={true}
                interests={recentInterests}
                onRemoveInterest={onRemoveInterest}
              />
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              width: "100%",
            }}
          >
            {recentInterests.length > 0 && (
              <SectionTitle title="" subTitle="Your Interests" />
            )}

            <UserInterestsList
              expand={true}
              editable={true}
              interests={interests}
              onRemoveInterest={onRemoveInterest}
            />
          </div>
        </div>
      </Styled.FitInterestsModal>
    </Modal>
  );
};

export default FitInterestsModal;
