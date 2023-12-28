import * as Styled from "./profile.styled";
import { QuillEditor } from "../Layouts";

type ProfileT = {};

const Profile: React.FC<ProfileT> = () => {
  return (
    <Styled.Profile>
      <QuillEditor />
    </Styled.Profile>
  );
};

export default Profile;
