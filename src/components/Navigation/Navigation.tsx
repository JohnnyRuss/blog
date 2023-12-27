import { NavLink } from "react-router-dom";
import { useThemeContext } from "@/Providers/useProviders";

import { PATHS } from "@/config/paths";
import { animateBottom } from "@/styles/animations";

// import Facebook from "@/assets/icons/facebook-rounded.svg";
// import Instagram from "@/assets/icons/instagram.svg";
// import Tiktok from "@/assets/icons/tiktok.svg";
// import Youtube from "@/assets/icons/youtube.svg";
import LogoBlack from "@/assets/logo/logo-black.webp";
import LogoWhite from "@/assets/logo/logo-white.webp";

import ThemeButton from "./ThemeButton";
import * as Styled from "./navigation.styled";

const Navigation: React.FC = () => {
  const { mode } = useThemeContext();

  return (
    <Styled.Navigation
      whileInView="onscreen"
      {...animateBottom({ inView: true })}
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

      <figure className="nav-logo">
        <img
          src={mode === "dark" ? LogoWhite : LogoBlack}
          width="100%"
          height={40}
          alt="Blog"
        />
      </figure>

      <div className="nav-routes__block">
        <ThemeButton />

        <ul className="nav-routes__block-list">
          <NavLink
            to={PATHS.home_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Home</li>
          </NavLink>

          <NavLink
            to={PATHS.contact_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Contact</li>
          </NavLink>

          <NavLink
            to={PATHS.about_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">About</li>
          </NavLink>

          <NavLink
            to={PATHS.auth_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="nav-routes__block-list--item">Login</li>
          </NavLink>
        </ul>
      </div>
    </Styled.Navigation>
  );
};

export default Navigation;
