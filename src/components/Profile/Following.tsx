import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { animateTop } from "@/styles/animations";

import * as Styled from "./styles/following.styled";
import { FollowCard } from "@/components/Layouts";

type FollowingT = {};

const Following: React.FC<FollowingT> = () => {
  return (
    <Styled.Following>
      {Array.from(new Array(20)).map(() => (
        <motion.div key={uuid()} {...animateTop({ once: true, inView: true })}>
          <FollowCard />
        </motion.div>
      ))}
    </Styled.Following>
  );
};

export default Following;
