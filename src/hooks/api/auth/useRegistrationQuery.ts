import { authStore } from "@/store";
import useRegistrationForm from "@/utils/validations/registrationSchema";

export default function useRegistrationQuery(
  params: {
    onDone?: () => void;
    redirectOnDone?: boolean;
  } | null
) {
  const form = useRegistrationForm();

  const status = authStore.use.status();
  const register = authStore.use.register();

  const onRegistration = form.handleSubmit(async (values) => {
    await register({
      args: { redirect: params?.redirectOnDone || false },
      params: {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
      },
    });

    params?.onDone && params.onDone();
  });

  return { form, onRegistration, status };
}
