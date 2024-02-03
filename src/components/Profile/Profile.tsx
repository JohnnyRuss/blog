import * as Styled from "./styles/profile.styled";
import ProfileNav from "./components/ProfileNav/ProfileNav";
import ProfileAside from "./components/ProfileAside/ProfileAside";

type ProfileT = {
  children: React.ReactNode;
};

const Profile: React.FC<ProfileT> = ({ children }) => {
  return (
    <Styled.Profile>
      <div className="profile__main-thread">
        <ProfileNav />
        <div className="profile__child-wrapper">{children}</div>
      </div>

      <ProfileAside />
    </Styled.Profile>
  );
};

export default Profile;
