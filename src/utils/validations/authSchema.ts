import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type AuthSchemaT = z.infer<typeof AuthSchema>;

export const useAuthForm = () =>
  useForm<AuthSchemaT>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
