import styled from "styled-components";

import { userStore } from "@/store";
import { useGetSavedListsQuery } from "@/hooks/api/lists";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { generateArray, textCapitalize, extractUserFirstName } from "@/utils";

import { ListCard, ListCardSkeleton, EmptyMessage } from "@/components/Layouts";

type SavedListsT = {
  limit?: number;
  userId: string;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SavedLists: React.FC<SavedListsT> = ({ userId, limit }) => {
  const user = userStore.use.userDetails();
  const { data, status } = useGetSavedListsQuery(userId);

  const { decodedUser } = useCheckIsAuthenticatedUser(true);

  const emptyMessage =
    decodedUser?._id === user._id
      ? `You have not saved lists`
      : `${textCapitalize(
          extractUserFirstName(user.fullname)
        )} has not saved lists`;

  return (
    <StyledList>
      {status.loading
        ? generateArray(limit || 6).map((id) => <ListCardSkeleton key={id} />)
        : data.map((list) => <ListCard key={list._id} list={list} />)}

      {data.length <= 0 && <EmptyMessage message={emptyMessage} />}
    </StyledList>
  );
};

export default SavedLists;
