import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ArticleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Content is required"),
  categories: z
    .array(
      z.object({
        title: z.string(),
        query: z.string(),
        color: z.string(),
        isNew: z.boolean(),
      })
    )
    .min(1, "Please select at least 1 category"),
});

export type ArticleSchemaT = z.infer<typeof ArticleSchema>;

export const useArticleForm = () =>
  useForm<ArticleSchemaT>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      title: "",
      body: "",
      categories: [],
    },
  });
