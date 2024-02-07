import { authStore } from "@/store";
import useRegistrationForm from "@/utils/validations/registrationSchema";

export default function useRegistrationQuery() {
  const form = useRegistrationForm();

  const status = authStore.use.status();
  const register = authStore.use.register();

  const onRegistration = form.handleSubmit(async (values) => {
    await register({
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
    });
  });

  return { form, onRegistration, status };
}
