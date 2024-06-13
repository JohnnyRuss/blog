import useCreateListForm, {
  CreateListSchemaT,
} from "@/utils/validations/createListSchema";
import { listsStore } from "@/store";

export default function useCreateListQuery(args: {
  listId?: string;
  onFulFilled?: () => void;
}) {
  const form = useCreateListForm();

  const createList = listsStore.use.createList();
  const updateList = listsStore.use.updateList();
  const status = listsStore.use.createListStatus();

  const onStartUpdate = (list: CreateListSchemaT) => form.reset(list);

  const onUpdate = form.handleSubmit(async (values) => {
    if (!args.listId) return;

    await updateList({
      data: {
        description: values.description,
        privacy: values.privacy,
        title: values.title,
      },
      listId: args.listId,
    });

    args.onFulFilled();
  });

  const onCreate = form.handleSubmit(async (values) => {
    await createList(values);
    args.onFulFilled();
  });

  return { form, onCreate, status, onStartUpdate, onUpdate };
}
