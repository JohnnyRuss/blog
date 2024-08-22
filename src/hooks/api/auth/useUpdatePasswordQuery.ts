import { authStore } from "@/store";
import useUpdatePasswordForm from "@/utils/validations/updatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const form = useUpdatePasswordForm();

  const status = authStore.use.status();
  const updatePasswordQuery = authStore.use.updatePassword();

  const onUpdatePassword = form.handleSubmit(async (values) => {
    await updatePasswordQuery({
      password: values.password,
      confirm_password: values.confirm_password,
    });
  });

  return { form, onUpdatePassword, status };
}
