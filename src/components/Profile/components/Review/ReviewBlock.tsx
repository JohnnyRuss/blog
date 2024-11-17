import { motion } from "framer-motion";

import { animateLeft } from "@/styles/animations";

import * as Styled from "./reviewBlock.styled";

type ReviewBlockT = {
  title: string;
  children: React.ReactNode;
};

const ReviewBlock: React.FC<ReviewBlockT> = ({ title, children }) => {
  return (
    <Styled.ReviewBlock>
      <motion.span
        {...animateLeft({ once: true, inView: true })}
        className="review-block__title"
      >
        {title}
      </motion.span>

      {children}
    </Styled.ReviewBlock>
  );
};

export default ReviewBlock;
