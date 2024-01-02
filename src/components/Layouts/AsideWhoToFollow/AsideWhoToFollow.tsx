import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { animateLeft } from "@/styles/animations";

import { AsideBlockItemContainer, FollowCard } from "@/components/Layouts";
import * as Styled from "./whoToFollow.styled";

type AsideWhoToFollowT = {};

const AsideWhoToFollow: React.FC<AsideWhoToFollowT> = () => {
  return (
    <AsideBlockItemContainer title="Who To Follow" subTitle="Your Authors">
      <Styled.AsideWhoToFollow data-who-to-follow>
        <ul className="follow-list">
          {Array.from(new Array(4)).map(() => (
            <motion.div
              {...animateLeft({ inView: true, once: true })}
              key={uuid()}
            >
              <FollowCard />
            </motion.div>
          ))}
        </ul>

        <button className="more-suggestions__btn">See More Suggestions</button>
      </Styled.AsideWhoToFollow>
    </AsideBlockItemContainer>
  );
};

export default AsideWhoToFollow;
