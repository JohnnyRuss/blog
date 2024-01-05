import { useState } from "react";
import { NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { animateBottom } from "@/styles/animations";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as UI from "./components";
import * as Styled from "./navigation.styled";
import { WriteButton } from "@/components/Layouts";

const Navigation: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const onOpenNav = () => setOpenNav((prev) => !prev);

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  return (
    <Styled.Navigation
      className={openNav ? "open scroll-block" : "closed"}
      {...animateBottom({ inView: true, once: true })}
    >
      <UI.Logo />

      <UI.ThemeButton />

      <WriteButton showTitle={false} />

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

          {isAuthenticated && (
            <>
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
            </>
          )}

          {!isAuthenticated && (
            <NavLink
              to={PATHS.auth_page}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <li className="nav-routes__block-list--item">Login</li>
            </NavLink>
          )}
        </ul>
      </div>

      {isAuthenticated && <UI.LogoutButton />}

      <UI.BurgerButton onOpen={onOpenNav} open={openNav} />
    </Styled.Navigation>
  );
};

export default Navigation;
