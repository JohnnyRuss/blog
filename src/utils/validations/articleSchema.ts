import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ArticleSchema = z.object({
  title: z.string(),
  body: z.string(),
  categories: z.array(
    z.object({
      title: z.string(),
      query: z.string(),
      color: z.string(),
      isNew: z.string(),
    })
  ),
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
