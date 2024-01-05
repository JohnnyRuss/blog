import { authStore } from "@/store";
import useRegistrationForm from "@/utils/validations/registrationSchema";

export default function useRegistrationQuery() {
  const form = useRegistrationForm();

  const register = authStore.use.register();

  const onRegistration = form.handleSubmit((values) => {
    register({
      username: values.username,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
    });
  });

  return { form, onRegistration };
}
