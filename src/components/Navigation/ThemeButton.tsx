import { useState } from "react";
import { useThemeContext } from "@/Providers/useProviders";

import Sun from "@/assets/icons/sun-fill-thin.svg";
import Moon from "@/assets/icons/moon-star-fill.svg";

type ThemeButtonT = {};

const ThemeButton: React.FC<ThemeButtonT> = () => {
  const { changeTheme, mode } = useThemeContext();

  const [toggle, setToggle] = useState(false);

  const onChangeTheme = () => {
    changeTheme(mode === "light" ? "dark" : "light");
    setToggle((prev) => !prev);
  };

  const title = mode === "light" ? "Dark Mode" : "Light Mode";

  return (
    <button
      className={`theme-btn ${toggle ? "light" : "dark"}`}
      onClick={onChangeTheme}
    >
      <figure className="theme-btn__fig">
        <img src={mode === "light" ? Moon : Sun} alt={title} title={title} />
      </figure>

      <span className="theme-btn__toggle-circle" />
    </button>
  );
};

export default ThemeButton;
