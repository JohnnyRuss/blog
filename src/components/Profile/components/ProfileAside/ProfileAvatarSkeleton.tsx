import Skeleton from "react-loading-skeleton";

const ProfileAvatarSkeleton: React.FC = () => {
  return (
    <div className="user-details">
      <Skeleton width={95} height={95} circle={true} />

      <div className="user-details__info">
        <Skeleton width={150} />

        <Skeleton width={100} />

        <Skeleton width={130} />
      </div>
    </div>
  );
};

export default ProfileAvatarSkeleton;
