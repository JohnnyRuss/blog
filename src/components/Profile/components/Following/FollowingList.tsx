import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

import { generateArray } from "@/utils";
import { animateTop } from "@/styles/animations";
import { useGetFollowingUsersQuery } from "@/hooks/api/userFollow";

import { FollowCard, FollowCardSkeleton } from "@/components/Layouts";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const FollowingList: React.FC = memo(() => {
  const { data, status } = useGetFollowingUsersQuery();

  return (
    <StyledList>
      {status.loading
        ? generateArray(5).map(() => <FollowCardSkeleton key={uuid()} />)
        : data.map((user) => (
            <motion.div
              key={user._id}
              {...animateTop({ once: true, inView: true })}
            >
              <FollowCard user={user} />
            </motion.div>
          ))}
    </StyledList>
  );
});

export default FollowingList;
