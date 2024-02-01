import { listsStore } from "@/store";
import { logger } from "@/utils";
import useCreateListForm from "@/utils/validations/createListSchema";

export default function useCreateListQuery(onFulFilled?: () => void) {
  const form = useCreateListForm();
  const createList = listsStore.use.createList();
  const status = listsStore.use.createListStatus();

  const onCreate = form.handleSubmit(async (values) => {
    try {
      await createList(values);
      onFulFilled();
    } catch (error) {
      logger(error);
    }
  });

  return { form, onCreate, status };
}
