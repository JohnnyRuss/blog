import styled from "styled-components";
import { useParams } from "react-router-dom";

import { userStore } from "@/store";
import { extractUserFirstName } from "@/utils";
import { useSearchParams } from "@/hooks/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import { ReviewBlock } from "./components/Review";
import { HistoryList } from "./components/History";
import { FollowingList } from "./components/Following";
import { ArticlesList } from "./components/Articles";
import { UserLists, SavedLists } from "./components/UserLists";
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

  const user = userStore.use.userDetails();
  const userFirstName = extractUserFirstName(user.fullname);

  const { user: activeUser, isAuthenticated } =
    useCheckIsAuthenticatedUser(true);

  const isActiveUserProfile =
    isAuthenticated && username === activeUser?.username;

  const emptyMessage = isActiveUserProfile
    ? "You haven't lists yet"
    : `${userFirstName} hasn't Public lists`;

  return (
    <>
      <StyledReview>
        <ReviewBlock
          title={
            isActiveUserProfile
              ? "Your Articles"
              : `${userFirstName}'s Articles`
          }
          redirectPath={DYNAMIC_ROUTES.profile_articles(username || "")}
        >
          <ArticlesList limit={4} />
        </ReviewBlock>

        <ReviewBlock
          title={
            isActiveUserProfile ? "Your Lists" : `${userFirstName}'s Lists`
          }
          redirectPath={DYNAMIC_ROUTES.profile_lists(username || "")}
        >
          <UserLists limit={3} emptyMessage={emptyMessage} />
        </ReviewBlock>

        <ReviewBlock
          title={
            isActiveUserProfile
              ? "Saved Lists"
              : `${extractUserFirstName(user.fullname)}'s Saved Lists`
          }
          redirectPath={DYNAMIC_ROUTES.profile_saved_lists(username || "")}
        >
          <SavedLists limit={3} userId={user._id} />
        </ReviewBlock>

        {isActiveUserProfile && (
          <>
            <ReviewBlock
              title="Reading History"
              redirectPath={DYNAMIC_ROUTES.profile_history(username || "")}
            >
              <HistoryList limit={4} />
            </ReviewBlock>

            <ReviewBlock
              title="Following"
              redirectPath={DYNAMIC_ROUTES.profile_following(username || "")}
            >
              <FollowingList />
            </ReviewBlock>
          </>
        )}
      </StyledReview>

      {isAddingToList && <CreateListModal />}
    </>
  );
};

export default Review;
