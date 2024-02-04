import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import {
  DeleteIcon,
  SaveIcon,
  RemoveIcon,
  EditIcon,
} from "@/components/Layouts/Icons";
import * as Styled from "./styles/listActions.styled";

type ListActionsT = {
  authorId: string;
};

const ListActions: React.FC<ListActionsT> = ({ authorId }) => {
  const { decodedUser } = useCheckIsAuthenticatedUser(true);

  const belongsToActiveUser = decodedUser?._id === authorId;

  return (
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
          <button className="list-header__actions-btn delete">
            <DeleteIcon />
          </button>

          <button className="list-header__actions-btn edit">
            <EditIcon />
          </button>
        </>
      )}
    </Styled.ListActions>
  );
};

export default ListActions;
