import { Controller } from "react-hook-form";
import useConfirmEmailQuery from "@/hooks/api/auth/useConfirmEmailQuery";

import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";

const ConfirmEmail: React.FC = () => {
  const { form, onConfirmEmail } = useConfirmEmailQuery();

  return (
    <AuthLayout onSubmit={onConfirmEmail}>
      <Controller
        control={form.control}
        name="pin"
        render={({ field, fieldState: { error } }) => (
          <Form.OTPField
            fieldProps={field}
            label="Pin"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <button className="submit-btn" type="submit">
        Confirm Email
      </button>
    </AuthLayout>
  );
};

export default ConfirmEmail;
