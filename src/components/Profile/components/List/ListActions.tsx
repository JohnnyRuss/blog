import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { useAppUIContext } from "@/Providers/useProviders";
import useDeleteListQuery from "@/hooks/api/lists/useDeleteListQuery";

import {
  DeleteIcon,
  SaveIcon,
  RemoveIcon,
  EditIcon,
} from "@/components/Layouts/Icons";
import { StandSpinner } from "@/components/Layouts";
import * as Styled from "./styles/listActions.styled";

type ListActionsT = {
  authorId: string;
  listId: string;
  onStartEdit: () => void;
};

const ListActions: React.FC<ListActionsT> = ({
  listId,
  authorId,
  onStartEdit,
}) => {
  const { decodedUser } = useCheckIsAuthenticatedUser(true);
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

  return (
    <>
      <Styled.ListActions>
        {!belongsToActiveUser && (
          <>
            <button className="list-header__actions-btn save">
              <SaveIcon />
            </button>

            <button className="list-header__actions-btn remove">
              <RemoveIcon />
            </button>
          </>
        )}

        {belongsToActiveUser && (
          <>
            <button
              onClick={onStartDelete}
              className="list-header__actions-btn delete"
            >
              <DeleteIcon />
            </button>

            <button
              onClick={onStartEdit}
              className="list-header__actions-btn edit"
            >
              <EditIcon />
            </button>
          </>
        )}
      </Styled.ListActions>

      {status.loading && <StandSpinner />}
    </>
  );
};

export default ListActions;
