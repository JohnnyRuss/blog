import { useSignInQuery } from "@/hooks/api/auth";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { PATHS } from "@/config/paths";
import AuthLayout from "./components/AuthLayout";

import * as Form from "@/components/Layouts/Form";

const Auth: React.FC = () => {
  const { form, onAuth } = useSignInQuery();

  return (
    <AuthLayout onSubmit={onAuth}>
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
          <Form.TextField
            fieldProps={field}
            label="Password"
            type="password"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <p className="forgot-password">
        <strong>
          <Link to={PATHS.forgot_password_page}>Forgot password ?</Link>
        </strong>
      </p>

      <button className="submit-btn" type="submit">
        Sign In
      </button>

      <p className="have-an--account">
        <span> Don't have an account ?</span>
        &nbsp;
        <strong>
          <Link to={PATHS.register_page}>Register</Link>
        </strong>
      </p>
    </AuthLayout>
  );
};

export default Auth;
