import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as Styled from "./auth.styled";
import LogoBlack from "@/assets/logo/logo-black.webp";
import LogoWhite from "@/assets/logo/logo-white.webp";

import { useThemeContext } from "@/Providers/useProviders";

type AuthLayoutT = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

const AuthLayout: React.FC<AuthLayoutT> = ({ children, onSubmit }) => {
  const { mode } = useThemeContext();

  return (
    <Styled.Auth>
      <Link to={PATHS.home_page}>
        <figure className="logo">
          <img
            src={mode === "light" ? LogoBlack : LogoWhite}
            alt="blog"
            title="blog"
            loading="eager"
            width={70}
            height="100%"
          />
        </figure>
      </Link>

      <form className="auth-form" onSubmit={onSubmit}>
        {children}
      </form>
    </Styled.Auth>
  );
};

export default AuthLayout;
