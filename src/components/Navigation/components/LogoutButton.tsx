import { useState } from "react";
import { motion } from "framer-motion";

import { authStore } from "@/store";
import { useLogoutQuery } from "@/hooks/api/auth";
import { animateTop } from "@/styles/animations";

const LogoutButton: React.FC = () => {
  const user = authStore.use.user();

  const { onLogout } = useLogoutQuery();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(false);
    onLogout();
  };

  return (
    <div className="logout-btn__box">
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
          className="logout-btn__dropdown"
        >
          <button className="logout-btn__dropdown-btn" onClick={handleLogout}>
            Logout
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LogoutButton;
