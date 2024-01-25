import { Controller } from "react-hook-form";
import useForgotPasswordQuery from "@/hooks/api/auth/useForgotPasswordQuery";

import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const ForgotPassword: React.FC = () => {
  const { form, onForgotPassword, status } = useForgotPasswordQuery();

  return (
    <AuthLayout onSubmit={onForgotPassword}>
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

      {status.error && <ErrorMessage message={status.message} />}

      <button className="submit-btn" type="submit">
        Send Email
      </button>

      {status.loading && <StandSpinner />}
    </AuthLayout>
  );
};

export default ForgotPassword;
