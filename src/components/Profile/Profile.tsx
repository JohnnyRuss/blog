import { Navigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useGetUserDetailsQuery } from "@/hooks/api/user";

import * as Styled from "./styles/profile.styled";
import { ProfileNav } from "./components/ProfileNav";
import { ProfileAside } from "./components/ProfileAside";

type ProfileT = {
  children: React.ReactNode;
};

const Profile: React.FC<ProfileT> = ({ children }) => {
  const { status } = useGetUserDetailsQuery();

  return (
    <Styled.Profile>
      {status.status === "SUCCESS" ? (
        <div className="profile__main-thread">
          <ProfileNav />
          <div className="profile__child-wrapper">{children}</div>
        </div>
      ) : status.status === "FAIL" ? (
        <Navigate to={PATHS.home_page} replace={true} />
      ) : (
        <></>
      )}
      <ProfileAside />
    </Styled.Profile>
  );
};

export default Profile;
