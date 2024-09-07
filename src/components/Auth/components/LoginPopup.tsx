import { useAppUIContext } from "@/Providers/useProviders";
import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";

import { useSignInQuery } from "@/hooks/api/auth";

type LoginPopupT = {
  children: React.ReactNode;
};

const LoginPopup: React.FC<LoginPopupT> = ({ children }) => {
  const { onCloseAuthPopup } = useAppUIContext();

  const { onAuth, form } = useSignInQuery({
    redirectOnDone: false,
    onDone: onCloseAuthPopup,
  });

  return (
    <AuthLayout useAsPopup={true} onSubmit={onAuth}>
      <LoginForm form={form} />

      {children}
    </AuthLayout>
  );
};

export default LoginPopup;
