import { authStore } from "@/store";
import useUpdatePasswordForm from "@/utils/validations/updatePasswordSchema";

export default function useUpdatePasswordQuery() {
  const form = useUpdatePasswordForm();

  const status = authStore.use.status();

  const onUpdatePassword = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onUpdatePassword, status };
}
