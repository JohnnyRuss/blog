import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { userStore } from "@/store";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { animateTopStagger } from "@/styles/animations";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

const { container, child } = animateTopStagger();

import { WriteButton, FollowButton } from "@/components/Layouts";
import ProfileAvatarSkeleton from "./ProfileAvatarSkeleton";

const ProfileAvatar: React.FC = () => {
  const { username } = useParams();
  const userDetails = userStore.use.userDetails();
  const status = userStore.use.detailsStatus();

  const { user: activeUser } = useCheckIsAuthenticatedUser();
  const isActiveUserProfile = username === activeUser?.username;

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

        {!isActiveUserProfile && (
          <motion.div {...child}>
            <FollowButton />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileAvatar;
