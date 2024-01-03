import useUpdatePasswordForm from "@/utils/validations/updatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const form = useUpdatePasswordForm();

  const onUpdatePassword = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onUpdatePassword };
}
