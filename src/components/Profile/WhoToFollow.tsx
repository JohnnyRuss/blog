import { SectionTitle } from "@/components/Layouts";
import * as Styled from "./styles/following.styled";
import WhoToFollowList from "./components/WhoToFollow/WhoToFollowList";

const WhoToFollow: React.FC = () => {
  return (
    <Styled.Following>
      <SectionTitle title="Who To Follow" />

      <WhoToFollowList />
    </Styled.Following>
  );
};

export default WhoToFollow;
