import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const UpdatePasswordSchema = z.object({
  password: z.string(),
  confirm_password: z.string(),
});

export type UpdatePasswordFormT = z.infer<typeof UpdatePasswordSchema>;

const useUpdatePasswordForm = () =>
  useForm<UpdatePasswordFormT>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

export default useUpdatePasswordForm;
