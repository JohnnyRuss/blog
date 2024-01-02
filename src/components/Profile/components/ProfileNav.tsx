import { memo } from "react";
import { NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as Styled from "./styles/nav.styled";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 640 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const ProfileNav: React.FC = memo(() => {
  return (
    <Styled.ProfileNav>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        rewind={true}
        centerMode={true}
        containerClass="profile-nav--list"
        removeArrowOnDeviceType={["desktop", "mobile"]}
      >
        <NavLink
          to={PATHS.profile_lists}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Your lists
        </NavLink>

        <NavLink
          to={PATHS.profile_saved_lists}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Saved lists
        </NavLink>

        <NavLink
          to={PATHS.profile_history}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Reading History
        </NavLink>

        <NavLink
          to={PATHS.profile_following}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Following
        </NavLink>
      </Carousel>
    </Styled.ProfileNav>
  );
});

export default ProfileNav;
