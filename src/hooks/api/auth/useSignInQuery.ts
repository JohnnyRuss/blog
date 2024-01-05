import { authStore } from "@/store";
import { useAuthForm } from "@/utils/validations/authSchema";

export default function useSignInQuery() {
  const form = useAuthForm();

  const login = authStore.use.login();

  const onAuth = form.handleSubmit(async (values) => {
    await login({ email: values.email, password: values.password });
  });

  return { form, onAuth };
}
