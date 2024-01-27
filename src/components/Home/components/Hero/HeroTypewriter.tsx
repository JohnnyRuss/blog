import { Typewriter } from "react-simple-typewriter";

const HeroTypewriter: React.FC = () => {
  return (
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
  );
};

export default HeroTypewriter;
