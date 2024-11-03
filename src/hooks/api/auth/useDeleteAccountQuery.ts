import { authStore } from "@/store";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import useDeleteAccountSchema from "@/utils/validations/deleteAccountSchema";

export default function useDeleteAccountQuery() {
  const status = authStore.use.status();
  const deleteQuery = authStore.use.deleteAccount();

  const form = useDeleteAccountSchema();

  const { isAuthenticated, decodedUser } = useCheckIsAuthenticatedUser(true);

  const onDelete = form.handleSubmit(async (values) => {
    if (!isAuthenticated || !decodedUser._id) return;
    await deleteQuery({ password: values.password, userId: decodedUser._id });
  });

  return { form, status, onDelete };
}
