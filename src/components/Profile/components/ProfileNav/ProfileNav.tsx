import { memo } from "react";
import Carousel from "react-multi-carousel";
import { NavLink, useParams } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";

import { DYNAMIC_ROUTES, PATHS } from "@/config/paths";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as Styled from "./nav.styled";

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
  const { username } = useParams();
  const { decodedUser } = useCheckIsAuthenticatedUser(true);

  const isActiveUserProfile = username === decodedUser?.username;

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
          to={DYNAMIC_ROUTES.profile_review(username || "")}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Review
        </NavLink>

        <NavLink
          to={DYNAMIC_ROUTES.profile_lists(username || "")}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Your lists
        </NavLink>

        <NavLink
          to={DYNAMIC_ROUTES.profile_saved_lists(username || "")}
          className={({ isActive }) =>
            `profile-nav--list__item ${isActive ? "active" : ""}`
          }
        >
          Saved lists
        </NavLink>

        {isActiveUserProfile && (
          <>
            <NavLink
              to={DYNAMIC_ROUTES.profile_history(username || "")}
              className={({ isActive }) =>
                `profile-nav--list__item ${isActive ? "active" : ""}`
              }
            >
              Reading History
            </NavLink>

            <NavLink
              to={DYNAMIC_ROUTES.profile_following(username || "")}
              className={({ isActive }) =>
                `profile-nav--list__item ${isActive ? "active" : ""}`
              }
            >
              Following
            </NavLink>
          </>
        )}

        {decodedUser?.role === "ADMIN" && isActiveUserProfile && (
          <NavLink
            to={PATHS.dashboard_page}
            className={({ isActive }) =>
              `profile-nav--list__item ${isActive ? "active" : ""}`
            }
          >
            Dashboard
          </NavLink>
        )}
      </Carousel>
    </Styled.ProfileNav>
  );
});

export default ProfileNav;
