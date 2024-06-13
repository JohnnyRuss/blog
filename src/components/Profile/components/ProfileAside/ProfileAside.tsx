import { memo } from "react";
import { useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { getNativeLocation } from "@/config/paths";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import {
  AsideEditorPick,
  AsideWhoToFollow,
  AsidePopularArticles,
} from "@/components/Layouts";
import ProfileAvatar from "./ProfileAvatar";
import * as Styled from "./styles/profileAside.styled";

const ProfileAside: React.FC = memo(() => {
  const { pathname } = useLocation();

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);
  const isOnFollowingSuggestionsPage =
    getNativeLocation(pathname) === PATHS.profile_following_suggestions;

  return (
    <Styled.ProfileAside>
      <ProfileAvatar />
      {!isAuthenticated ? (
        <AsidePopularArticles />
      ) : isOnFollowingSuggestionsPage ? (
        <AsideEditorPick />
      ) : (
        <AsideWhoToFollow />
      )}
    </Styled.ProfileAside>
  );
});

export default ProfileAside;
