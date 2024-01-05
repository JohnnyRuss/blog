import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { PATHS } from "@/config/paths";
import { animateLogo } from "@/styles/animations";
import { useThemeContext } from "@/Providers/useProviders";

import LogoBlack from "@/assets/logo/logo-black.webp";
import LogoWhite from "@/assets/logo/logo-white.webp";

const Logo: React.FC = () => {
  const { mode } = useThemeContext();

  return (
    <Link to={PATHS.home_page}>
      <motion.figure className="nav-logo" {...animateLogo}>
        <img
          src={mode === "dark" ? LogoWhite : LogoBlack}
          width="100%"
          height={40}
          alt="Blog"
        />
      </motion.figure>
    </Link>
  );
};

export default Logo;
