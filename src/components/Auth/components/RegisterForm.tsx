import { Controller, UseFormReturn } from "react-hook-form";

import * as Form from "@/components/Layouts/Form";
import { RegistrationFormT } from "@/utils/validations/registrationSchema";

type RegisterFormT = {
  form: UseFormReturn<RegistrationFormT>;
};

const RegisterForm: React.FC<RegisterFormT> = ({ form }) => {
  return (
    <>
      <Controller
        control={form.control}
        name="fullname"
        render={({ field, fieldState: { error } }) => (
          <Form.TextField
            fieldProps={field}
            label="Fullname"
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
    </>
  );
};

export default RegisterForm;
