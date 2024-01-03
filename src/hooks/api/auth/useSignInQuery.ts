import { useAuthForm } from "@/utils/validations/authSchema";

export default function useSignInQuery() {
  const form = useAuthForm();

  const onAuth = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onAuth };
}
