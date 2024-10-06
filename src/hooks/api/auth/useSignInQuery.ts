import { authStore } from "@/store";
import { useAuthForm } from "@/utils/validations/authSchema";

export default function useSignInQuery(
  params: {
    onDone?: () => void;
    redirectOnDone?: boolean;
  } | null
) {
  const form = useAuthForm();

  const status = authStore.use.status();
  const login = authStore.use.login();

  const onAuth = form.handleSubmit(async (values) => {
    await login({
      args: { redirect: params?.redirectOnDone || false },
      params: { email: values.email, password: values.password },
    });

    params?.onDone && params.onDone();
  });

  return { form, onAuth, status };
}
