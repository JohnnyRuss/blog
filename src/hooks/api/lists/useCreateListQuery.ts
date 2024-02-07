import useCreateListForm, {
  CreateListSchemaT,
} from "@/utils/validations/createListSchema";
import { listsStore } from "@/store";

export default function useCreateListQuery(onFulFilled?: () => void) {
  const form = useCreateListForm();

  const createList = listsStore.use.createList();
  const updateList = listsStore.use.updateList();
  const status = listsStore.use.createListStatus();

  const onStartUpdate = (list: CreateListSchemaT) => form.reset(list);

  const onUpdate = form.handleSubmit(async (values) => {
    await updateList({
      data: { description: "", privacy: "PUBLIC", title: "" },
      listId: "",
    });

    onFulFilled();
  });

  const onCreate = form.handleSubmit(async (values) => {
    await createList(values);
    onFulFilled();
  });

  return { form, onCreate, status, onStartUpdate, onUpdate };
}
