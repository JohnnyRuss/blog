import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import { authStore } from "@/store";
import { useLogoutQuery } from "@/hooks/api/auth";
import { animateTop } from "@/styles/animations";
import { DYNAMIC_ROUTES } from "@/config/paths";

import {
  List,
  LogOut,
  Profile,
  History,
  SavedLists,
  EditProfile,
} from "@/components/Layouts/Icons";

const ProfileDropdown: React.FC = () => {
  const navigate = useNavigate();

  const user = authStore.use.user();

  const { onLogout } = useLogoutQuery();

  const [open, setOpen] = useState(false);

  const dropdownOptions: Array<{
    _id: string;
    title: string;
    path: string;
    danger?: boolean;
    icon: React.ReactNode;
  }> = useMemo(
    () => [
      {
        _id: uuid(),
        icon: <Profile />,
        title: "Profile",
        path: DYNAMIC_ROUTES.profile_page(user.username),
      },
      {
        _id: uuid(),
        icon: <List />,
        title: "Your Lists",
        path: DYNAMIC_ROUTES.profile_lists(user.username),
      },
      {
        _id: uuid(),
        icon: <SavedLists />,
        title: "Saved Lists",
        path: DYNAMIC_ROUTES.profile_saved_lists(user.username),
      },
      {
        _id: uuid(),
        icon: <History />,
        title: "Reading History",
        path: DYNAMIC_ROUTES.profile_history(user.username),
      },
      {
        _id: uuid(),
        icon: <EditProfile />,
        title: "Edit Profile",
        path: DYNAMIC_ROUTES.profile_settings(user.username),
      },
      {
        _id: uuid(),
        icon: <LogOut />,
        title: "Logout",
        path: "LOGOUT",
        danger: true,
      },
    ],
    [user.username]
  );

  const handleRoute = (path: string) => {
    if (path === "LOGOUT") onLogout();
    else navigate(path);

    setOpen(false);
  };

  return (
    <div className="profile-dropdown__box">
      <figure onClick={() => setOpen((prev) => !prev)}>
        <img
          src={user.avatar}
          alt={user.username}
          title={user.username}
          loading="eager"
          width={40}
          height={40}
        />
      </figure>

      <div
        onClick={() => setOpen(false)}
        className={`logout-btn__dropdown-wall ${
          open ? "scroll-block active" : ""
        }`}
      />

      {open && (
        <motion.div
          {...animateTop({ once: true, duration: 0.2 })}
          className="profile-dropdown__window"
        >
          {dropdownOptions.map((option) => (
            <button
              key={option._id}
              onClick={() => handleRoute(option.path)}
              className={`profile-dropdown__window-btn ${
                option.danger ? "danger" : ""
              }`}
            >
              <span>{option.icon}</span>
              <span>{option.title}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProfileDropdown;
