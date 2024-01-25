import { Controller } from "react-hook-form";
import useConfirmEmailQuery from "@/hooks/api/auth/useConfirmEmailQuery";

import * as Form from "@/components/Layouts/Form";
import AuthLayout from "./components/AuthLayout";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const ConfirmEmail: React.FC = () => {
  const { form, onConfirmEmail, status } = useConfirmEmailQuery();

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

      {status.error && <ErrorMessage message={status.message} />}

      <button className="submit-btn" type="submit">
        Confirm Email
      </button>

      {status.loading && <StandSpinner />}
    </AuthLayout>
  );
};

export default ConfirmEmail;
