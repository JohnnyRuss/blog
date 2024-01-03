import useConfirmEmailForm from "@/utils/validations/confirmEmailSchema";

export default function useConfirmEmailQuery() {
  const form = useConfirmEmailForm();

  const onConfirmEmail = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onConfirmEmail };
}
