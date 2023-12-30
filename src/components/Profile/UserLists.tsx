import { v4 as uuid } from "uuid";
import * as Styled from "./styles/userLists.styled";
import ListCard from "./components/ListCard";

const UserLists: React.FC = () => {
  return (
    <Styled.UserLists>
      {Array.from(new Array(10)).map(() => (
        <ListCard key={uuid()} />
      ))}
    </Styled.UserLists>
  );
};

export default UserLists;
