import useRegistrationForm from "@/utils/validations/registrationSchema";

export default function useRegistrationQuery() {
  const form = useRegistrationForm();

  const onRegistration = form.handleSubmit((values) => {
    console.log(values);
  });

  return { form, onRegistration };
}
