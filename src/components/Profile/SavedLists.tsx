// import { v4 as uuid } from "uuid";
import * as Styled from "./styles/savedLists.styled";
// import ListCard from "./components/ListCard";

type SavedListsT = {
  limit?: number;
};

const SavedLists: React.FC<SavedListsT> = ({ limit }) => {
  return (
    <Styled.SavedLists>
      {/* {Array.from(new Array(limit || 10)).map(() => (
        <ListCard key={uuid()} />
      ))} */}
    </Styled.SavedLists>
  );
};

export default SavedLists;
