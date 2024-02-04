import { FollowingList } from "./components/Following";
import * as Styled from "./styles/following.styled";

type FollowingT = {};

const Following: React.FC<FollowingT> = () => {
  return (
    <Styled.Following>
      <FollowingList />
    </Styled.Following>
  );
};

export default Following;
