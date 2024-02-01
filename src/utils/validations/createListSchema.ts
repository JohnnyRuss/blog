import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateListSchema = z.object({
  title: z.string().min(2, "Please fill up title field"),
  description: z.string(),
  privacy: z.enum(["PRIVATE", "PUBLIC"]),
});

export type CreateListSchemaT = z.infer<typeof CreateListSchema>;

const useCreateListForm = () =>
  useForm<CreateListSchemaT>({
    resolver: zodResolver(CreateListSchema),
    defaultValues: {
      title: "",
      description: "",
      privacy: "PUBLIC",
    },
  });

export default useCreateListForm;
