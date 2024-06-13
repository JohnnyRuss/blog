import * as Styled from "./styles/following.styled";
import WhoToFollowList from "./components/WhoToFollow/WhoToFollowList";

const WhoToFollow: React.FC = () => {
  return (
    <Styled.Following>
      <WhoToFollowList />
    </Styled.Following>
  );
};

export default WhoToFollow;
