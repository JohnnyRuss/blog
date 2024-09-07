import { useAppUIContext } from "@/Providers/useProviders";
import AuthLayout from "./AuthLayout";
import RegisterForm from "./RegisterForm";

import { useRegistrationQuery } from "@/hooks/api/auth";

type RegisterPopupT = {
  children: React.ReactNode;
};

const RegisterPopup: React.FC<RegisterPopupT> = ({ children }) => {
  const { onCloseAuthPopup } = useAppUIContext();

  const { form, onRegistration } = useRegistrationQuery({
    redirectOnDone: false,
    onDone: onCloseAuthPopup,
  });

  return (
    <AuthLayout useAsPopup={true} onSubmit={onRegistration}>
      <RegisterForm form={form} />

      {children}
    </AuthLayout>
  );
};

export default RegisterPopup;
