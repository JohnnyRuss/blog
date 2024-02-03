import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { animateLeft } from "@/styles/animations";

import * as Styled from "./reviewBlock.styled";

type ReviewBlockT = {
  title: string;
  redirectPath: string;
  children: React.ReactNode;
};

const ReviewBlock: React.FC<ReviewBlockT> = ({
  children,
  title,
  redirectPath,
}) => {
  return (
    <Styled.ReviewBlock>
      <motion.span
        {...animateLeft({ once: true, inView: true })}
        className="review-block__title"
      >
        {title}
      </motion.span>

      {children}

      <Link to={redirectPath} className="review-block__more">
        Show All
      </Link>
    </Styled.ReviewBlock>
  );
};

export default ReviewBlock;
