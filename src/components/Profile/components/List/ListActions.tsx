import { useSaveListQuery } from "@/hooks/api/lists";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useAppUIContext } from "@/Providers/useProviders";
import useDeleteListQuery from "@/hooks/api/lists/useDeleteListQuery";

import { Save, Edit, Remove, Delete } from "@/components/Layouts/Icons";
import * as Styled from "./styles/listActions.styled";
import { StandSpinner, ErrorMessage } from "@/components/Layouts";

type ListActionsT = {
  listId: string;
  authorId: string;
  allowEdit: boolean;
  onStartEdit: () => void;
};

const ListActions: React.FC<ListActionsT> = ({
  listId,
  authorId,
  allowEdit,
  onStartEdit,
}) => {
  const { decodedUser, isAuthenticated } = useCheckIsAuthenticatedUser(true);
  const belongsToActiveUser = decodedUser?._id === authorId;

  const { activateDialog } = useAppUIContext();
  const { deleteListQuery, status } = useDeleteListQuery();

  const onStartDelete = () =>
    activateDialog({
      target: "List",
      message: "Are you sure you want to delete this <TARGET>",
      onConfirm: () => deleteListQuery({ listId }),
      title: "Delete List",
      type: "danger",
    });

  const {
    onSave,
    onRemove,
    status: saveStatus,
    savedListsIds,
  } = useSaveListQuery();

  return (
    <>
      <Styled.ListActions>
        {!belongsToActiveUser && isAuthenticated && (
          <>
            {savedListsIds.includes(listId) ? (
              <button
                title="remove list"
                disabled={saveStatus.loading}
                onClick={() => onRemove({ listId })}
                className="list-header__actions-btn remove"
              >
                <Remove />
              </button>
            ) : (
              <button
                title="save list"
                disabled={saveStatus.loading}
                onClick={() => onSave({ listId })}
                className="list-header__actions-btn save"
              >
                <Save />
              </button>
            )}
          </>
        )}

        {belongsToActiveUser && allowEdit && (
          <>
            <button
              onClick={onStartDelete}
              className="list-header__actions-btn delete"
            >
              <Delete />
            </button>

            <button
              onClick={onStartEdit}
              className="list-header__actions-btn edit"
            >
              <Edit />
            </button>
          </>
        )}
      </Styled.ListActions>

      {saveStatus.error && <ErrorMessage message={saveStatus.message} />}

      {status.loading && <StandSpinner />}
    </>
  );
};

export default ListActions;
