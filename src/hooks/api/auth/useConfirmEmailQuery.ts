import { authStore } from "@/store";
import useConfirmEmailForm from "@/utils/validations/confirmEmailSchema";

export default function useConfirmEmailQuery() {
  const form = useConfirmEmailForm();

  const status = authStore.use.status();

  const onConfirmEmail = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onConfirmEmail, status };
}
