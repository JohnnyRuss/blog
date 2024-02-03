import { memo } from "react";

import ProfileAvatar from "./ProfileAvatar";
import * as Styled from "./styles/profileAside.styled";
import { AsideWhoToFollow } from "@/components/Layouts";

const ProfileAside: React.FC = memo(() => {
  return (
    <Styled.ProfileAside>
      <ProfileAvatar />
      <AsideWhoToFollow />
    </Styled.ProfileAside>
  );
});

export default ProfileAside;
