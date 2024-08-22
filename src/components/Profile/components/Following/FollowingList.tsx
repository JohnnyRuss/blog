/* eslint-disable react-hooks/exhaustive-deps */
import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useUserFollowShallowList } from "@/hooks/utils";
import { useGetFollowingUsersQuery } from "@/hooks/api/userFollow";

import {
  FollowCard,
  EmptyMessage,
  FollowCardSkeleton,
} from "@/components/Layouts";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const FollowingList: React.FC = memo(() => {
  const { data, status } = useGetFollowingUsersQuery();

  const { checkIsFollowing, dataShallow } = useUserFollowShallowList(data);

  return (
    <StyledList>
      {status.loading ? (
        generateArray(5).map((id) => <FollowCardSkeleton key={id} />)
      ) : dataShallow.length === 0 ? (
        <EmptyMessage message="You aren't following other users" />
      ) : (
        dataShallow.map((user) => (
          <motion.div
            key={user._id}
            {...animateTop({ once: true, inView: true })}
          >
            <FollowCard user={user} isFollowing={checkIsFollowing(user)} />
          </motion.div>
        ))
      )}
    </StyledList>
  );
});

export default FollowingList;
