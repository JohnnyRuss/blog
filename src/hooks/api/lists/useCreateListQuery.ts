import useCreateListForm from "@/utils/validations/createListSchema";

export default function useCreateListQuery() {
  const form = useCreateListForm();

  return { form };
}
