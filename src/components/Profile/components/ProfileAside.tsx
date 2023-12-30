import * as Styled from "./styles/profileAside.styled";
import { AsideWhoToFollow } from "@/components/Layouts";

const ProfileAside: React.FC = () => {
  return (
    <Styled.ProfileAside>
      <AsideWhoToFollow />
    </Styled.ProfileAside>
  );
};

export default ProfileAside;
