import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { generateArray } from "@/utils";
import { useGetListsQuery } from "@/hooks/api/lists";

import { EmptyMessage, ListCard, ListCardSkeleton } from "@/components/Layouts";

type UserListsT = {
  limit?: number;
  emptyMessage: string;
  redirectPath?: string;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const UserLists: React.FC<UserListsT> = memo(
  ({ limit, emptyMessage, redirectPath }) => {
    const { data, status } = useGetListsQuery(limit);

    return (
      <>
        <StyledList>
          {status.loading
            ? generateArray(limit || 6).map((id) => (
                <ListCardSkeleton key={id} />
              ))
            : data.map((list) => <ListCard key={list._id} list={list} />)}

          {data.length <= 0 && <EmptyMessage message={emptyMessage} />}
        </StyledList>

        {redirectPath && data.length > 0 && (
          <Link to={redirectPath} className="review-block__more">
            Show All
          </Link>
        )}
      </>
    );
  }
);

export default UserLists;
