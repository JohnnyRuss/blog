import { Camera } from "@/components/Layouts/Icons";

type ProfileImageCameraLabelT = {};

const ProfileImageCameraLabel: React.FC<ProfileImageCameraLabelT> = () => {
  return (
    <label htmlFor="profile-change">
      <Camera />
    </label>
  );
};

export default ProfileImageCameraLabel;
