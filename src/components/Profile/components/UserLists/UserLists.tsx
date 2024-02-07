import { memo } from "react";
import styled from "styled-components";

import { generateArray } from "@/utils";
import { useGetListsQuery } from "@/hooks/api/lists";

import ListCard from "./ListCard";
import ListCardSkeleton from "./ListCardSkeleton";
import { EmptyMessage } from "@/components/Layouts";

type UserListsT = {
  limit?: number;
  emptyMessage: string;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const UserLists: React.FC<UserListsT> = memo(({ limit, emptyMessage }) => {
  const { data, status } = useGetListsQuery(limit);

  return (
    <StyledList>
      {status.loading
        ? generateArray(limit || 6).map((id) => <ListCardSkeleton key={id} />)
        : data.map((list) => <ListCard key={list._id} list={list} />)}

      {data.length <= 0 && <EmptyMessage message={emptyMessage} />}
    </StyledList>
  );
});

export default UserLists;
