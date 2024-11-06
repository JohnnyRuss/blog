import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { animateBottom } from "@/styles/animations";
import { PATHS, DYNAMIC_ROUTES } from "@/config/paths";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useWindowDimension } from "@/hooks/utils";

import * as UI from "./components";
import * as Styled from "./navigation.styled";
import { WriteButton } from "@/components/Layouts";

const Navigation: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const onOpenNav = () => setOpenNav((prev) => !prev);

  const { width } = useWindowDimension();

  const { isAuthenticated, user } = useCheckIsAuthenticatedUser(true);

  const closeMobileNav = () => {
    if (!openNav) return;
    setOpenNav(false);
  };

  useEffect(() => {
    if (width > 640 && openNav) setOpenNav(() => false);
  }, [width, openNav]);

  return (
    <Styled.Navigation
      className={openNav ? "open scroll-block" : "closed"}
      {...animateBottom({ inView: true, once: true })}
    >
      <UI.Logo />

      <UI.ThemeButton />

      {isAuthenticated && <WriteButton showTitle={false} />}

      <div className={`nav-routes__block ${openNav ? "scroll-block" : ""}`}>
        <ul className="nav-routes__block-list">
          <NavLink
            to={PATHS.home_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li
              onClick={closeMobileNav}
              className="nav-routes__block-list--item"
            >
              Home
            </li>
          </NavLink>

          <NavLink
            to={PATHS.blog_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li
              onClick={closeMobileNav}
              className="nav-routes__block-list--item"
            >
              Blog
            </li>
          </NavLink>

          {isAuthenticated && (
            <>
              <NavLink
                to={PATHS.for_you_page}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li
                  onClick={closeMobileNav}
                  className="nav-routes__block-list--item"
                >
                  For You
                </li>
              </NavLink>

              <NavLink
                to={DYNAMIC_ROUTES.profile_page(user.username)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li
                  onClick={closeMobileNav}
                  className="nav-routes__block-list--item"
                >
                  Profile
                </li>
              </NavLink>
            </>
          )}

          {!isAuthenticated && (
            <NavLink
              to={PATHS.auth_page}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <li
                onClick={closeMobileNav}
                className="nav-routes__block-list--item"
              >
                Login
              </li>
            </NavLink>
          )}
        </ul>
      </div>

      {isAuthenticated && <UI.ProfileDropdown />}

      <UI.BurgerButton onOpen={onOpenNav} open={openNav} />
    </Styled.Navigation>
  );
};

export default Navigation;
