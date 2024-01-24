import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import {
  animateRight,
  animateBottom,
  animateLeft,
  animateTop,
} from "@/styles/animations";
import { homeStore } from "@/store";
import { useQuill } from "@/hooks/utils";

import * as Styled from "./hero.styled";
import { LineClamp } from "@/components/Layouts";

const Hero: React.FC = () => {
  const topArticle = homeStore.use.topArticle();
  const { description, thumbnail } = useQuill(topArticle.body);

  return (
    <Styled.Hero>
      <h2 className="hero__intro-txt">
        <span className="hero__intro-txt--welcome">
          <Typewriter
            loop={1}
            typeSpeed={80}
            deleteSpeed={40}
            words={["Hey, Welcome back !"]}
          />
        </span>{" "}
        <span>Discover new stories and creative ideas here.</span>
      </h2>

      <article className="hero__post">
        <motion.figure
          className="hero__post-fig"
          {...animateRight({ inView: true, once: false })}
        >
          <img width="100%" height="100%" src={thumbnail} title="" alt="" />
        </motion.figure>

        <div className="hero__post-content">
          <motion.div {...animateBottom({ inView: true, once: false })}>
            <LineClamp clamp={2} component="h3" text={topArticle.title} />
          </motion.div>

          <motion.div {...animateLeft({ inView: true, once: false })}>
            <LineClamp clamp={8} text={description} />
          </motion.div>

          <motion.button
            className="hero__post-content--more__btn"
            {...animateTop({ inView: true, once: false })}
          >
            <strong>
              <u>View More</u>
            </strong>
          </motion.button>
        </div>
      </article>
    </Styled.Hero>
  );
};

export default Hero;
