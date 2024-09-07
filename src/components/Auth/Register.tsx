import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import useRegistrationQuery from "@/hooks/api/auth/useRegistrationQuery";

import RegisterForm from "./components/RegisterForm";
import AuthLayout from "./components/AuthLayout";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const Register: React.FC = () => {
  const { form, onRegistration, status } = useRegistrationQuery(null);

  return (
    <AuthLayout onSubmit={onRegistration}>
      <RegisterForm form={form} />

      {status.error && <ErrorMessage message={status.message} />}

      <button className="submit-btn" type="submit">
        Register
      </button>

      <p className="have-an--account">
        <span>Have an account ?</span>
        &nbsp;
        <strong>
          <Link to={PATHS.auth_page}>Sign In</Link>
        </strong>
      </p>

      {status.loading && <StandSpinner />}
    </AuthLayout>
  );
};

export default Register;
