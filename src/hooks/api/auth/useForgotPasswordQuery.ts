import { authStore } from "@/store";
import useForgotPasswordForm from "@/utils/validations/forgotPasswordSchema";

export default function useForgotPasswordQuery() {
  const form = useForgotPasswordForm();

  const status = authStore.use.status();
  const forgotPasswordQuery = authStore.use.forgotPassword();

  const onForgotPassword = form.handleSubmit(async (values) => {
    await forgotPasswordQuery({ email: values.email });
  });

  return { form, onForgotPassword, status };
}
