import { Controller, UseFormReturn } from "react-hook-form";

import * as Form from "@/components/Layouts/Form";
import { AuthSchemaT } from "@/utils/validations/authSchema";

type LoginFormT = {
  form: UseFormReturn<AuthSchemaT>;
};

const LoginForm: React.FC<LoginFormT> = ({ form }) => {
  return (
    <>
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
    </>
  );
};

export default LoginForm;
