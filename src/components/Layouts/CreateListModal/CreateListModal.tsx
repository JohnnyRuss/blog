import { useState } from "react";

import { useSearchParams } from "@/hooks/utils";
import { useGetListsToAddQuery, useAddToListQuery } from "@/hooks/api/lists";

import ListItem from "./ListItem";
import CreateListForm from "./CreateListForm";
import { Modal, RelativeSpinner } from "@/components/Layouts";
import * as Styled from "./index.styled";

type CreateListModalT = {};

const CreateListModal: React.FC<CreateListModalT> = () => {
  const { data, status } = useGetListsToAddQuery();
  const { add } = useAddToListQuery();

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
                      list={list}
                      key={list._id}
                      onAddToList={() =>
                        add({
                          listId: list._id,
                          articleId: isAddingToListId || "",
                        })
                      }
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
