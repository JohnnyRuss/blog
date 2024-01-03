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

      <form className="auth-form" onSubmit={onSubmit}>
        {children}
      </form>
    </Styled.Auth>
  );
};

export default AuthLayout;
