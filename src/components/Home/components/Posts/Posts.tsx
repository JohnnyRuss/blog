import * as Styled from "./posts.styled";
import { animateTop, animateLeft, animateRight } from "@/styles/animations";
import { motion } from "framer-motion";

import Post from "./Post";
import { SectionTitle } from "@/components/Layouts";

type PostsT = {};

const Posts: React.FC<PostsT> = () => {
  return (
    <Styled.Posts>
      <SectionTitle title="Recent Posts" />

      <ul className="posts-list">
        <motion.div whileInView="onscreen" {...animateTop({ inView: true })}>
          <Post />
        </motion.div>

        <motion.div whileInView="onscreen" {...animateTop({ inView: true })}>
          <Post />
        </motion.div>

        <motion.div whileInView="onscreen" {...animateTop({ inView: true })}>
          <Post />
        </motion.div>

        <motion.div whileInView="onscreen" {...animateTop({ inView: true })}>
          <Post />
        </motion.div>
      </ul>

      <div className="pagination-box">
        <motion.button
          whileInView="onscreen"
          {...animateLeft({ inView: true })}
          className="pagination-box__btn"
        >
          Prev
        </motion.button>

        <motion.button
          whileInView="onscreen"
          {...animateRight({ inView: true })}
          className="pagination-box__btn"
        >
          Next
        </motion.button>
      </div>
    </Styled.Posts>
  );
};

export default Posts;
