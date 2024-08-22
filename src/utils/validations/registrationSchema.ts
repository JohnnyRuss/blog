import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  isValidPassword,
  confirmPasswordValidation,
  is_2_5_rangeWords,
} from "./utils/customValidators";

const RegistrationSchema = z
  .object({
    fullname: z
      .string()
      .trim()
      .min(5)
      .max(50)
      .refine(is_2_5_rangeWords.validator, {
        message: is_2_5_rangeWords.message,
      }),
    email: z.string().trim().email(),
    password: z
      .string()
      .trim()
      .min(8)
      .refine(isValidPassword.validator, { message: isValidPassword.message }),
    confirm_password: z.string().trim(),
  })
  .refine(
    (data) =>
      confirmPasswordValidation.validator(data.password, data.confirm_password),
    {
      message: confirmPasswordValidation.message,
      path: ["confirm_password"],
    }
  );

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
