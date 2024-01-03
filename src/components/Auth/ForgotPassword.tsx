import { Controller } from "react-hook-form";
import useForgotPasswordQuery from "@/hooks/api/auth/useForgotPasswordQuery";

import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";

const ForgotPassword: React.FC = () => {
  const { form, onForgotPassword } = useForgotPasswordQuery();

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

      <button className="submit-btn" type="submit">
        Send Email
      </button>
    </AuthLayout>
  );
};

export default ForgotPassword;
