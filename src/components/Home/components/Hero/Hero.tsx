import { motion } from "framer-motion";

import {
  animateRight,
  animateBottom,
  animateLeft,
  animateTop,
} from "@/styles/animations";
import { useQuill } from "@/hooks/utils";
import { useGetTopArticleQuery } from "@/hooks/api/articles";

import * as Styled from "./hero.styled";
import HeroTypewriter from "./HeroTypewriter";
import HeroSkeleton from "./HeroSkeleton";
import { LineClamp } from "@/components/Layouts";

const Hero: React.FC = () => {
  const { data, status } = useGetTopArticleQuery();
  const { description, thumbnail } = useQuill(data?.body);

  return (
    <Styled.Hero>
      <HeroTypewriter />

      {status.loading ? (
        <HeroSkeleton />
      ) : (
        <article className="hero__post">
          <motion.figure
            className="hero__post-fig"
            {...animateRight({ inView: true, once: false })}
          >
            <img width="100%" height="100%" src={thumbnail} title="" alt="" />
          </motion.figure>

          <div className="hero__post-content">
            <motion.div {...animateBottom({ inView: true, once: false })}>
              <LineClamp clamp={2} component="h3" text={data.title} />
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
      )}
    </Styled.Hero>
  );
};

export default Hero;
