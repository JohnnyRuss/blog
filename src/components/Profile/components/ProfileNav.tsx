import { PATHS } from "@/config/paths";

import * as Styled from "./styles/nav.styled";
import { NavLink } from "react-router-dom";

type ProfileNavT = {};

const ProfileNav: React.FC<ProfileNavT> = () => {
  return (
    <Styled.ProfileNav>
      <ul className="profile-nav--list">
        <NavLink
          to={PATHS.profile_lists}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          <li className="profile-nav--list__item-wrapper">Your lists</li>
        </NavLink>

        <NavLink
          to={PATHS.profile_saved_lists}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          <li className="profile-nav--list__item-wrapper">Saved lists</li>
        </NavLink>

        <NavLink
          to={PATHS.profile_history}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          <li className="profile-nav--list__item-wrapper">Reading History</li>
        </NavLink>

        <NavLink
          to={PATHS.profile_following}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          <li className="profile-nav--list__item-wrapper">Following</li>
        </NavLink>
      </ul>
    </Styled.ProfileNav>
  );
};

export default ProfileNav;
