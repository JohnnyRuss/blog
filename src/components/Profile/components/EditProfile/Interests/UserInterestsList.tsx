import { Close } from "@/components/Layouts/Icons";
import { CategoryChip } from "@/components/Layouts";

import * as Styled from "./styles/userInterestsList.styled";

import { CategoryT } from "@/interface/db/category.types";
import { RemoveUserInterestArgsT } from "@/interface/db/user.types";

type UserInterestsListT = {
  expand: boolean;
  recent?: boolean;
  editable: boolean;
  interests: Array<CategoryT>;
  onRemoveInterest?: (args: RemoveUserInterestArgsT) => void;
};

const UserInterestsList: React.FC<UserInterestsListT> = ({
  expand,
  editable,
  interests,
  recent = false,
  onRemoveInterest,
}) => {
  return (
    <Styled.UserInterestsList
      className={`${editable ? "editable" : ""} ${recent ? "recent" : ""}`}
    >
      {interests.slice(0, expand ? interests.length : 12).map((interest) => (
        <li key={`editable-${interest._id}`} className="interest-wrapper">
          <CategoryChip
            size="lg"
            category={interest}
            redirectOnClick={editable ? false : true}
          />

          {editable && (
            <button
              className="remove-interest__btn"
              onClick={() => onRemoveInterest({ categoryId: interest._id })}
            >
              <Close />
            </button>
          )}
        </li>
      ))}
    </Styled.UserInterestsList>
  );
};

export default UserInterestsList;
