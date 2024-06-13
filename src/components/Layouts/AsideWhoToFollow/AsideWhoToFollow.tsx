import { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { authStore } from "@/store";
import { generateArray } from "@/utils";
import { DYNAMIC_ROUTES } from "@/config/paths";
import { useUserFollowShallowList } from "@/hooks/utils";
import { useWhoToFollowQuery } from "@/hooks/api/userFollow";

import {
  FollowCard,
  FollowCardSkeleton,
  AsideBlockItemContainer,
} from "@/components/Layouts";
import { animateLeft } from "@/styles/animations";
import * as Styled from "./whoToFollow.styled";

type AsideWhoToFollowT = {};

const AsideWhoToFollow: React.FC<AsideWhoToFollowT> = memo(() => {
  const { data, status } = useWhoToFollowQuery();

  const { checkIsFollowing, dataShallow } = useUserFollowShallowList(data);

  const { username } = authStore.use.user();

  return (
    <AsideBlockItemContainer title="Who To Follow" subTitle="Your Authors">
      <Styled.AsideWhoToFollow data-who-to-follow>
        <ul className="follow-list">
          {status.loading
            ? generateArray(6).map((id) => <FollowCardSkeleton key={id} />)
            : dataShallow.map((user) => (
                <motion.div
                  key={user._id}
                  {...animateLeft({ inView: true, once: true })}
                >
                  <FollowCard
                    user={user}
                    isFollowing={!checkIsFollowing(user)}
                  />
                </motion.div>
              ))}
        </ul>

        <Link
          className="more-suggestions__btn"
          to={DYNAMIC_ROUTES.profile_following_suggestions(username)}
        >
          See More Suggestions
        </Link>
      </Styled.AsideWhoToFollow>
    </AsideBlockItemContainer>
  );
});

export default AsideWhoToFollow;
