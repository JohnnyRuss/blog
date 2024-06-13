import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  useFollowUserQuery,
  useCheckIsFollowingUserQuery,
} from "@/hooks/api/userFollow";
import { userStore } from "@/store";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import { animateTopStagger } from "@/styles/animations";

import { WriteButton, FollowButton } from "@/components/Layouts";
import ProfileAvatarSkeleton from "./ProfileAvatarSkeleton";

const { container, child } = animateTopStagger();

const ProfileAvatar: React.FC = () => {
  const { username } = useParams();
  const userDetails = userStore.use.userDetails();
  const status = userStore.use.detailsStatus();

  const { user: activeUser, isAuthenticated } =
    useCheckIsAuthenticatedUser(true);

  const isActiveUserProfile = username === activeUser?.username;

  const { isFollowingUser, check } = useCheckIsFollowingUserQuery(
    userDetails._id
  );

  const { followQuery, status: followStatus } = useFollowUserQuery(
    userDetails._id
  );

  const onFollow = async () => {
    await followQuery();
    await check();
  };

  return status.loading ? (
    <ProfileAvatarSkeleton />
  ) : (
    <motion.div className="user-details" {...container}>
      <motion.figure className="user-details__fig" {...child}>
        <img
          width={95}
          height={95}
          loading="eager"
          alt={userDetails?.fullname || ""}
          title={userDetails?.fullname || ""}
          src={userDetails?.avatar || ""}
        />
      </motion.figure>

      <div className="user-details__info">
        <motion.span className="user-details__info-username" {...child}>
          {userDetails?.fullname || ""}
        </motion.span>

        {isActiveUserProfile && (
          <>
            <motion.div className="user-details__info-write--btn" {...child}>
              <WriteButton />
            </motion.div>

            <motion.div {...child}>
              <Link
                to={username ? DYNAMIC_ROUTES.profile_settings(username) : ""}
                className="user-details__info-edit--btn"
              >
                Edit Profile
              </Link>
            </motion.div>
          </>
        )}

        {!isActiveUserProfile && isAuthenticated && (
          <motion.div {...child}>
            <FollowButton
              onClick={onFollow}
              isFollowing={isFollowingUser}
              disabled={followStatus.loading}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileAvatar;
