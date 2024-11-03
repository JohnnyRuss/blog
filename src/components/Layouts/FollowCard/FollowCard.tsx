import { useTheme } from "styled-components";
import { Link } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";
import { useFollowUserQuery } from "@/hooks/api/userFollow";

import * as Styled from "./followCard.styled";
import { LineClamp, FollowButton } from "@/components/Layouts";

import { UserDetailsT } from "@/interface/db/user.types";

type FollowCardT = {
  user: UserDetailsT;
  isFollowing: boolean;
  showBio?: boolean;
};

const FollowCard: React.FC<FollowCardT> = ({
  user,
  isFollowing,
  showBio = false,
}) => {
  const theme = useTheme();

  const { followQuery, status } = useFollowUserQuery(user._id);

  return (
    <Styled.FollowCard>
      <figure className="follow-card__fig">
        <img
          width={50}
          height={50}
          loading="lazy"
          src={user.avatar}
          alt={user.fullname}
          title={user.fullname}
        />
      </figure>

      <div className="follow-card__content">
        <Link
          className="follow-card__content-username"
          to={DYNAMIC_ROUTES.profile_page(user.username)}
        >
          {user.fullname}
        </Link>

        <small>{user.email}</small>

        {showBio && (
          <LineClamp
            clamp={1}
            sx={{
              fontSize: theme.fontSize.sm,
              maxWidth: "90%",
              color:
                theme.mode === "dark"
                  ? theme.colors.gray
                  : theme.colors.gray_dark,
            }}
            text={user.bio}
          />
        )}
      </div>

      <FollowButton
        onClick={followQuery}
        isFollowing={isFollowing}
        disabled={status.loading}
      />
    </Styled.FollowCard>
  );
};

export default FollowCard;
