import { useState } from "react";

import {
  useGetListsToAddQuery,
  useAddToListQuery,
  useCreateListQuery,
} from "@/hooks/api/lists";
import { useSearchParams } from "@/hooks/utils";

import ListItem from "./ListItem";
import * as Styled from "./index.styled";
import { Modal, RelativeSpinner, CreateListForm } from "@/components/Layouts";

const CreateListModal: React.FC = () => {
  // ========== Candidate Lists ==========
  const { data, status } = useGetListsToAddQuery();

  // ========== Add To List ==========
  const { add } = useAddToListQuery();

  const { getParam, removeParam } = useSearchParams();
  const isAddingToListId = getParam("save") || "";
  const onCloseModal = () => removeParam("save");

  // ========== Create Lists ==========
  const [isCreatingList, setIsCreatingList] = useState(false);
  const onCancelListCreation = () => setIsCreatingList(false);

  const { form, onCreate } = useCreateListQuery({
    onFulFilled: onCancelListCreation,
  });

  return (
    <div>
      <Modal
        showCloseBtn={true}
        onClose={onCloseModal}
        open={isAddingToListId ? true : false}
      >
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
                  Create New List
                </button>
              </div>
            </>
          )}

          {isCreatingList && (
            <CreateListForm
              form={form}
              onCreate={onCreate}
              onCancel={onCancelListCreation}
            />
          )}
        </Styled.CreateListModal>
      </Modal>
    </div>
  );
};

export default CreateListModal;
