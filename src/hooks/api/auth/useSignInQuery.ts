import { authStore } from "@/store";
import { useAuthForm } from "@/utils/validations/authSchema";

export default function useSignInQuery({
  onDone,
  redirectOnDone = true,
}: {
  onDone?: () => void;
  redirectOnDone?: boolean;
} | null) {
  const form = useAuthForm();

  const status = authStore.use.status();
  const login = authStore.use.login();

  const onAuth = form.handleSubmit(async (values) => {
    await login({
      args: { redirect: redirectOnDone },
      params: { email: values.email, password: values.password },
    });

    onDone && onDone();
  });

  return { form, onAuth, status };
}
