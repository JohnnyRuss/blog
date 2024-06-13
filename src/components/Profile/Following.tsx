import { FollowingList } from "./components/Following";
import * as Styled from "./styles/following.styled";

const Following: React.FC = () => {
  return (
    <Styled.Following>
      <FollowingList />
    </Styled.Following>
  );
};

export default Following;
