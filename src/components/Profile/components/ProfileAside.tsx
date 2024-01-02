import { memo } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "@/config/paths";

import { motion } from "framer-motion";
import { animateTopStagger } from "@/styles/animations";

import * as Styled from "./styles/profileAside.styled";
import { AsideWhoToFollow, WriteButton } from "@/components/Layouts";

const { container, child } = animateTopStagger();

const ProfileAside: React.FC = memo(() => {
  return (
    <Styled.ProfileAside>
      <motion.div className="user-details" {...container}>
        <motion.figure className="user-details__fig" {...child}>
          <img
            width={95}
            height={95}
            src="https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
            loading="eager"
          />
        </motion.figure>

        <div className="user-details__info">
          <motion.span className="user-details__info-username" {...child}>
            Tom Odell
          </motion.span>

          <motion.div className="user-details__info-write--btn" {...child}>
            <WriteButton />
          </motion.div>

          <motion.div {...child}>
            <Link
              to={PATHS.profile_settings}
              className="user-details__info-edit--btn"
            >
              Edit Profile
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <AsideWhoToFollow />
    </Styled.ProfileAside>
  );
});

export default ProfileAside;
