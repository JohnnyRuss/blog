import { memo } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import { useGetListsQuery } from "@/hooks/api/lists";

import ListCard from "./ListCard";
import ListCardSkeleton from "./ListCardSkeleton";

type UserListsT = {
  limit?: number;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const UserLists: React.FC<UserListsT> = memo(({ limit }) => {
  const { data, status } = useGetListsQuery(limit);

  return (
    <StyledList>
      {status.loading
        ? Array.from(new Array(limit || 6)).map(() => (
            <ListCardSkeleton key={uuid()} />
          ))
        : data.map((list) => <ListCard key={list._id} list={list} />)}
    </StyledList>
  );
});

export default UserLists;
