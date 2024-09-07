import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  animateTop,
  animateLeft,
  animateRight,
  animateBottom,
} from "@/styles/animations";
import { useQuill } from "@/hooks/utils";
import { useGetTopArticleQuery } from "@/hooks/api/articles";

import * as Styled from "./hero.styled";
import HeroSkeleton from "./HeroSkeleton";
import HeroTypewriter from "./HeroTypewriter";
import { LineClamp, ErrorMessage } from "@/components/Layouts";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const { data, status } = useGetTopArticleQuery();
  const { description, thumbnail } = useQuill(data?.body);

  return (
    <Styled.Hero>
      <HeroTypewriter />

      {status.loading ? (
        <HeroSkeleton />
      ) : status.status === "SUCCESS" ? (
        <article className="hero__post">
          {thumbnail && (
            <motion.figure
              className="hero__post-fig"
              {...animateRight({ inView: true, once: false })}
            >
              <img width="100%" height="100%" src={thumbnail} title="" alt="" />
            </motion.figure>
          )}

          <div className="hero__post-content">
            <motion.div {...animateBottom({ inView: true, once: false })}>
              <LineClamp clamp={2} component="h3" text={data.title} />
            </motion.div>

            <motion.div {...animateLeft({ inView: true, once: false })}>
              <LineClamp clamp={8} text={description} />
            </motion.div>

            <motion.button
              onClick={() => navigate(`/${data.slug}`)}
              className="hero__post-content--more__btn"
              {...animateTop({ inView: true, once: false })}
            >
              <strong>
                <u>View More</u>
              </strong>
            </motion.button>
          </div>
        </article>
      ) : (
        <ErrorMessage message={status.message} align="center" size="md" />
      )}
    </Styled.Hero>
  );
};

export default Hero;
