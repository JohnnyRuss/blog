import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useUserFollowShallowList } from "@/hooks/utils";
import { useWhoToFollowQuery } from "@/hooks/api/userFollow";

import { FollowCard, FollowCardSkeleton } from "@/components/Layouts";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const WhoToFollowList: React.FC = memo(() => {
  const { data, status } = useWhoToFollowQuery();

  const { checkIsFollowing, dataShallow } = useUserFollowShallowList(data);

  return (
    <StyledList>
      {status.loading
        ? generateArray(10).map((id) => <FollowCardSkeleton key={id} />)
        : dataShallow.map((user) => (
            <motion.div
              key={user._id}
              {...animateTop({ once: true, inView: true })}
            >
              <FollowCard user={user} isFollowing={!checkIsFollowing(user)} />
            </motion.div>
          ))}
    </StyledList>
  );
});

export default WhoToFollowList;
