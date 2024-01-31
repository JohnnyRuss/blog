import { useState } from "react";

import { useSearchParams } from "@/hooks/utils";
import { useGetListsToAddQuery } from "@/hooks/api/lists";

import * as Styled from "./index.styled";
import { Modal, RelativeSpinner } from "@/components/Layouts";
import ListItem from "./ListItem";
import CreateListForm from "./CreateListForm";

type CreateListModalT = {};

const CreateListModal: React.FC<CreateListModalT> = () => {
  const { data, status } = useGetListsToAddQuery();

  const { getParam, removeParam } = useSearchParams();
  const isAddingToListId = getParam("save") || "";

  const [isCreatingList, setIsCreatingList] = useState(false);
  const onCancelListCreation = () => setIsCreatingList(false);

  const onCloseModal = () => removeParam("save");

  return (
    <div>
      <Modal onClose={onCloseModal} open={true} showCloseBtn={true}>
        <Styled.CreateListModal>
          {status.loading && <RelativeSpinner />}

          {!isCreatingList && (
            <>
              <ul className="lists-row__wrapper">
                <div className="lists-row">
                  {data.map((list) => (
                    <ListItem
                      key={list._id}
                      list={list}
                      articleId={isAddingToListId}
                    />
                  ))}
                </div>
              </ul>

              <div className="list-row__footer">
                <button onClick={() => setIsCreatingList(true)}>
                  Create List
                </button>
              </div>
            </>
          )}

          {isCreatingList && <CreateListForm onCancel={onCancelListCreation} />}
        </Styled.CreateListModal>
      </Modal>
    </div>
  );
};

export default CreateListModal;
