// import { v4 as uuid } from "uuid";

import { useGetListsQuery } from "@/hooks/api/lists";

import ListCard from "./components/ListCard";
import * as Styled from "./styles/userLists.styled";

type UserListsT = {
  limit?: number;
};

const UserLists: React.FC<UserListsT> = ({ limit }) => {
  const { data, status } = useGetListsQuery(limit);

  return (
    <Styled.UserLists>
      {data.map((list) => (
        <ListCard key={list._id} list={list} />
      ))}
    </Styled.UserLists>
  );
};

export default UserLists;
