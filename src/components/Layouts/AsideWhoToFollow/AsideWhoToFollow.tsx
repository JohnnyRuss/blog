import { memo } from "react";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

import { animateLeft } from "@/styles/animations";
import { useWhoToFollowQuery } from "@/hooks/api/user";

import {
  FollowCard,
  FollowCardSkeleton,
  AsideBlockItemContainer,
} from "@/components/Layouts";
import * as Styled from "./whoToFollow.styled";

type AsideWhoToFollowT = {};

const AsideWhoToFollow: React.FC<AsideWhoToFollowT> = memo(() => {
  const { data, status } = useWhoToFollowQuery();

  return (
    <AsideBlockItemContainer title="Who To Follow" subTitle="Your Authors">
      <Styled.AsideWhoToFollow data-who-to-follow>
        <ul className="follow-list">
          {status.loading
            ? Array.from(new Array(6)).map(() => (
                <FollowCardSkeleton key={uuid()} />
              ))
            : data.map((user) => (
                <motion.div
                  key={user._id}
                  {...animateLeft({ inView: true, once: true })}
                >
                  <FollowCard user={user} />
                </motion.div>
              ))}
        </ul>

        <button className="more-suggestions__btn">See More Suggestions</button>
      </Styled.AsideWhoToFollow>
    </AsideBlockItemContainer>
  );
});

export default AsideWhoToFollow;
