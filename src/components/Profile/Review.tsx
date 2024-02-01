import { Link } from "react-router-dom";
// import { v4 as uuid } from "uuid";

import { motion } from "framer-motion";
import {
  animateLeft,
  //  animateTop
} from "@/styles/animations";

import * as Styled from "./styles/review.styled";
import UserLists from "./UserLists";
// import ListCard from "./components/ListCard";
import SavedLists from "./SavedLists";
// import { FollowCard, ArticleCardSmall } from "@/components/Layouts";

type ReviewT = {};

const Review: React.FC<ReviewT> = () => {
  return (
    <Styled.Review>
      <div className="review-block">
        <motion.span
          {...animateLeft({ once: true, inView: true })}
          className="review-block__title"
        >
          Your Lists
        </motion.span>

        <UserLists limit={3} />

        <Link to="" className="review-block__more">
          Show All
        </Link>
      </div>

      <div className="review-block">
        <motion.span
          {...animateLeft({ once: true, inView: true })}
          className="review-block__title"
        >
          Saved Lists
        </motion.span>

        <SavedLists limit={3} />

        <Link to="" className="review-block__more">
          Show All
        </Link>
      </div>

      <div className="review-block">
        <motion.span
          {...animateLeft({ once: true, inView: true })}
          className="review-block__title"
        >
          Reading History
        </motion.span>

        {/* <div className="review-block__list">
          {Array.from(new Array(5)).map(() => (
            <motion.div
              {...animateTop({ once: true, inView: true })}
              key={uuid()}
            >
              <ArticleCardSmall />
            </motion.div>
          ))}
        </div> */}

        <Link to="" className="review-block__more">
          Show All
        </Link>
      </div>

      <div className="review-block">
        <motion.span
          {...animateLeft({ once: true, inView: true })}
          className="review-block__title"
        >
          Following
        </motion.span>

        {/* <div className="review-block__list">
          {Array.from(new Array(6)).map(() => (
            <motion.div
              {...animateTop({ once: true, inView: true })}
              key={uuid()}
            >
              <FollowCard />
            </motion.div>
          ))}
        </div> */}

        <Link to="" className="review-block__more">
          Show All
        </Link>
      </div>
    </Styled.Review>
  );
};

export default Review;
