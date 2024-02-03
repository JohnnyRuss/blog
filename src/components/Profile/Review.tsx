import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useSearchParams } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";

import * as UI from "./components";
import { CreateListModal } from "@/components/Layouts";

export const StyledReview = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Review: React.FC = () => {
  const { username } = useParams();

  const { getParam } = useSearchParams();
  const isAddingToList = getParam("save") || "";

  return (
    <>
      <StyledReview>
        <UI.ReviewBlock
          title="Your Lists"
          redirectPath={DYNAMIC_ROUTES.profile_lists(username || "")}
        >
          <UI.UserLists limit={3} />
        </UI.ReviewBlock>

        <UI.ReviewBlock
          title="Saved Lists"
          redirectPath={DYNAMIC_ROUTES.profile_saved_lists(username || "")}
        >
          <UI.SavedLists limit={3} />
        </UI.ReviewBlock>

        <UI.ReviewBlock
          title="Reading History"
          redirectPath={DYNAMIC_ROUTES.profile_history(username || "")}
        >
          <UI.HistoryList limit={4} />
        </UI.ReviewBlock>

        <UI.ReviewBlock
          title="Following"
          redirectPath={DYNAMIC_ROUTES.profile_following(username || "")}
        >
          <UI.FollowingList />
        </UI.ReviewBlock>
      </StyledReview>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Review;
