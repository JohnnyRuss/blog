import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const FullNameSchema = z.object({ fullname: z.string().min(4) });
type FullnameSchemaT = z.infer<typeof FullNameSchema>;

const EmailSchema = z.object({ email: z.string().email() });
type EmailSchemaT = z.infer<typeof EmailSchema>;

const UsernameSchema = z.object({ username: z.string().min(4).max(16) });
type UsernameSchemaT = z.infer<typeof UsernameSchema>;

const BioSchema = z.object({ bio: z.string().min(5).max(160) });
type BioSchemaT = z.infer<typeof BioSchema>;

const useEditProfileForms = () => {
  const fullnameForm = useForm<FullnameSchemaT>({
    resolver: zodResolver(FullNameSchema),
    defaultValues: { fullname: "" },
  });

  const emailForm = useForm<EmailSchemaT>({
    resolver: zodResolver(EmailSchema),
    defaultValues: { email: "" },
  });

  const usernameForm = useForm<UsernameSchemaT>({
    resolver: zodResolver(UsernameSchema),
    defaultValues: { username: "" },
  });

  const bioForm = useForm<BioSchemaT>({
    resolver: zodResolver(BioSchema),
    defaultValues: { bio: "" },
  });

  return { fullnameForm, emailForm, usernameForm, bioForm };
};

export { useEditProfileForms };
