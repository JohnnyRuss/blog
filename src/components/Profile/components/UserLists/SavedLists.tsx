import styled from "styled-components";

// import { generateArray } from "@/utils";

// import ListCard from "./components/ListCard";

type SavedListsT = {
  limit?: number;
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SavedLists: React.FC<SavedListsT> = ({ limit }) => {
  return (
    <StyledList>
      {/* {generateArray(limit || 10).map((id) => (
        <ListCard key={id} />
      ))} */}
    </StyledList>
  );
};

export default SavedLists;
