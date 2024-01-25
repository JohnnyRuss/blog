import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import useRegistrationQuery from "@/hooks/api/auth/useRegistrationQuery";

import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const Register: React.FC = () => {
  const { form, onRegistration, status } = useRegistrationQuery();

  return (
    <AuthLayout onSubmit={onRegistration}>
      <Controller
        control={form.control}
        name="fullname"
        render={({ field, fieldState: { error } }) => (
          <Form.TextField
            fieldProps={field}
            label="fullname"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Form.TextField
            fieldProps={field}
            label="Email"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <Controller
        control={form.control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            fieldProps={field}
            label="Password"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <Controller
        control={form.control}
        name="confirm_password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            fieldProps={field}
            label="Confirm Password"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

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
