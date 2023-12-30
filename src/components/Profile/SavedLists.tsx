import { v4 as uuid } from "uuid";
import * as Styled from "./styles/savedLists.styled";
import ListCard from "./components/ListCard";

const SavedLists: React.FC = () => {
  return (
    <Styled.SavedLists>
      {Array.from(new Array(10)).map(() => (
        <ListCard key={uuid()} />
      ))}
    </Styled.SavedLists>
  );
};

export default SavedLists;
