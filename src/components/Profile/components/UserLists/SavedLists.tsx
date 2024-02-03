import styled from "styled-components";
// import { v4 as uuid } from "uuid";
// import ListCard from "./components/ListCard";

type SavedListsT = {
  limit?: number;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SavedLists: React.FC<SavedListsT> = () => {
  return (
    <StyledList>
      {/* {Array.from(new Array(limit || 10)).map(() => (
        <ListCard key={uuid()} />
      ))} */}
    </StyledList>
  );
};

export default SavedLists;
