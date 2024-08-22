import { authStore } from "@/store";
import useConfirmEmailForm from "@/utils/validations/confirmEmailSchema";

export default function useConfirmEmailQuery() {
  const form = useConfirmEmailForm();

  const status = authStore.use.status();
  const confirmEmailQuery = authStore.use.confirmEmail();

  const onConfirmEmail = form.handleSubmit(async (values) => {
    await confirmEmailQuery({ pin: +values.pin });
  });

  return { form, onConfirmEmail, status };
}
