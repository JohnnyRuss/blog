import useForgotPasswordForm from "@/utils/validations/forgotPasswordSchema";

export default function useForgotPasswordQuery() {
  const form = useForgotPasswordForm();

  const onForgotPassword = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onForgotPassword };
}
