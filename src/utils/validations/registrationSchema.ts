import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegistrationSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirm_password: z.string(),
});

export type RegistrationFormT = z.infer<typeof RegistrationSchema>;

const useRegistrationForm = () =>
  useForm<RegistrationFormT>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

export default useRegistrationForm;
