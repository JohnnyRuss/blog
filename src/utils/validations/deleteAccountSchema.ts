import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPassword } from "./utils/customValidators";

const DeleteAccountSchema = z.object({
  password: z
    .string()
    .trim()
    .min(8)
    .refine(isValidPassword.validator, { message: isValidPassword.message }),
});

export type DeleteAccountSchemaT = z.infer<typeof DeleteAccountSchema>;

const useDeleteAccountSchema = () =>
  useForm<DeleteAccountSchemaT>({
    resolver: zodResolver(DeleteAccountSchema),
    defaultValues: { password: "" },
  });

export default useDeleteAccountSchema;
