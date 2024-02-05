import useCreateListForm, {
  CreateListSchemaT,
} from "@/utils/validations/createListSchema";
import { logger } from "@/utils";
import { listsStore } from "@/store";

export default function useCreateListQuery(onFulFilled?: () => void) {
  const form = useCreateListForm();
  const createList = listsStore.use.createList();
  const status = listsStore.use.createListStatus();

  const onStartUpdate = (list: CreateListSchemaT) => form.reset(list);

  const onUpdate = form.handleSubmit(async (values) => {
    try {
      await createList(values);
      onFulFilled();
    } catch (error) {
      logger(error);
    }
  });

  const onCreate = form.handleSubmit(async (values) => {
    try {
      await createList(values);
      onFulFilled();
    } catch (error) {
      logger(error);
    }
  });

  return { form, onCreate, status, onStartUpdate, onUpdate };
}
