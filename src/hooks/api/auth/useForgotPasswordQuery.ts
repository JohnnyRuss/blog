import { authStore } from "@/store";
import useForgotPasswordForm from "@/utils/validations/forgotPasswordSchema";

export default function useForgotPasswordQuery() {
  const form = useForgotPasswordForm();

  const status = authStore.use.status();

  const onForgotPassword = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onForgotPassword, status };
}
