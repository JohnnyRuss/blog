import { Controller } from "react-hook-form";
import useUpdatePasswordQuery from "@/hooks/api/auth/useUpdatePasswordQuery";

import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";

const UpdatePassword: React.FC = () => {
  const { form, onUpdatePassword } = useUpdatePasswordQuery();

  return (
    <AuthLayout onSubmit={onUpdatePassword}>
      <Controller
        control={form.control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            label="Password"
            fieldProps={field}
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

      <button className="submit-btn" type="submit">
        Update Password
      </button>
    </AuthLayout>
  );
};

export default UpdatePassword;
