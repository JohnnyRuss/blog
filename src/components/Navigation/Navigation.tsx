import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { PATHS } from "@/config/paths";
import { useThemeContext } from "@/Providers/useProviders";
import { animateBottom, animateLogo } from "@/styles/animations";

// import Facebook from "@/assets/icons/facebook-rounded.svg";
// import Instagram from "@/assets/icons/instagram.svg";
// import Tiktok from "@/assets/icons/tiktok.svg";
// import Youtube from "@/assets/icons/youtube.svg";
import LogoBlack from "@/assets/logo/logo-black.webp";
import LogoWhite from "@/assets/logo/logo-white.webp";

import ThemeButton from "./ThemeButton";
import BurgerButton from "./BurgerButton";
import * as Styled from "./navigation.styled";

const Navigation: React.FC = () => {
  const { mode } = useThemeContext();

  const [openNav, setOpenNav] = useState(false);
  const onOpenNav = () => setOpenNav((prev) => !prev);

  return (
    <Styled.Navigation
      whileInView="onscreen"
      className={openNav ? "open scroll-block" : "closed"}
      {...animateBottom({ inView: true, once: true })}
    >
      {/* <ul className="nav-socials__list">
        <Link to="#">
          <li className="nav-socials__list--item">
            <img src={Facebook} alt="facebook" />
          </li>
        </Link>

        <Link to="#">
          <li className="nav-socials__list--item">
            <img src={Instagram} alt="instagram" />
          </li>
        </Link>

        <Link to="#">
          <li className="nav-socials__list--item">
            <img src={Tiktok} alt="tiktok" />
          </li>
        </Link>

        <Link to="#">
          <li className="nav-socials__list--item youtube">
            <img src={Youtube} alt="youtube" />
          </li>
        </Link>
      </ul> */}
      <motion.figure className="nav-logo" {...animateLogo}>
        <img
          src={mode === "dark" ? LogoWhite : LogoBlack}
          width="100%"
          height={40}
          alt="Blog"
        />
      </motion.figure>

      <ThemeButton />

      <div className="nav-routes__block">
        <ul className="nav-routes__block-list">
          <NavLink
            to={PATHS.home_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Home</li>
          </NavLink>

          <NavLink
            to={PATHS.blog_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Blog</li>
          </NavLink>

          <NavLink
            to={PATHS.for_you_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">For You</li>
          </NavLink>

          <NavLink
            to={PATHS.profile_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Profile</li>
          </NavLink>

          <NavLink
            to={PATHS.auth_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Login</li>
          </NavLink>
        </ul>
      </div>

      <BurgerButton onOpen={onOpenNav} open={openNav} />
    </Styled.Navigation>
  );
};

export default Navigation;
