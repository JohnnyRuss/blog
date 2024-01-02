import { Typewriter } from "react-simple-typewriter";

import {
  animateRight,
  animateBottom,
  animateLeft,
  animateTop,
} from "@/styles/animations";
import { motion } from "framer-motion";

import * as Styled from "./hero.styled";
import { LineClamp } from "@/components/Layouts";

const Hero: React.FC = () => {
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
          <img
            width="100%"
            height="100%"
            src="https://images.unsplash.com/photo-1703002917693-e51692232c81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title=""
            alt=""
          />
        </motion.figure>

        <div className="hero__post-content">
          <motion.div {...animateBottom({ inView: true, once: false })}>
            <LineClamp
              clamp={2}
              component="h3"
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur labore, quidem laboriosam voluptatum et eaque ea ipsa perferendis, nesciunt porro quia, soluta quos."
            />
          </motion.div>

          <motion.div {...animateLeft({ inView: true, once: false })}>
            <LineClamp
              clamp={8}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nam facilis, laborum magni sunt, fuga illo voluptatem
                fugit sequi aperiam quidem reiciendis repellat quia
                voluptatibus, quibusdam esse dolorem maxime error voluptates cum
                harum nesciunt consectetur.\n Sunt, eaque blanditiis. Dolor nostrum quaerat at enim, alias
                adipisci quas praesentium doloribus dolores dolorem consequuntur
                amet accusamus nulla in, blanditiis, necessitatibus quia tempore
                quo cupiditate maiores ullam sapiente ipsum? Unde delectus vel,
                nostrum eum quos vero quae dolore molestias enim itaque quas
                ipsam quis nobis quam sapiente dolorem autem nisi. Reprehenderit
                dolore laborum quibusdam rerum, blanditiis ducimus porro iure
                nisi incidunt veniam voluptatum voluptatibus voluptate expedita
                eaque sunt est tenetur necessitatibus consequatur. Molestiae
                tempora fuga est ipsum ea optio deserunt facere enim nulla,
                consequatur"
            />
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
