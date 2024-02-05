import { memo, useState } from "react";

import { useGetListDetailsQuery, useCreateListQuery } from "@/hooks/api/lists";

import * as UI from "./";
import * as Styled from "./styles/listHeader.styled";
import { CreateListForm, Modal, StandSpinner } from "@/components/Layouts";

import { CreateListSchemaT } from "@/utils/validations/createListSchema";

const ListHeader: React.FC = memo(() => {
  const { data, status } = useGetListDetailsQuery();

  const [isEditingList, setIsEditingList] = useState(false);
  const onCancelEdit = () => setIsEditingList(false);

  const {
    form,
    onStartUpdate,
    onUpdate,
    status: createStatus,
  } = useCreateListQuery(onCancelEdit);

  const onStartEdit = () => {
    setIsEditingList(true);
    onStartUpdate({
      title: data.title,
      privacy: data.privacy,
      description: data.description,
    } as CreateListSchemaT);
  };

  return status.loading ? (
    <UI.ListHeadSkeleton />
  ) : (
    <>
      <Styled.ListHeader className="list-header">
        <UI.ListAuthor author={data.author} />

        <div className="list-header__sub-wrapper">
          <UI.ListDetails
            title={data.title}
            createdAt={data.createdAt}
            description={data.description}
          />

          <div className="list-header__actions-box">
            <UI.ListPrivacy privacy={data.privacy} />

            <UI.ListActions
              listId={data._id}
              onStartEdit={onStartEdit}
              authorId={data.author._id}
            />
          </div>
        </div>
      </Styled.ListHeader>

      <Modal onClose={onCancelEdit} open={isEditingList} showCloseBtn={true}>
        <div style={{ width: "35rem", height: "45rem" }}>
          <CreateListForm
            form={form}
            onCreate={onUpdate}
            onCancel={onCancelEdit}
          />

          {createStatus.loading && <StandSpinner />}
        </div>
      </Modal>
    </>
  );
});

export default ListHeader;
