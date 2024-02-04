import { memo } from "react";

import { useGetListDetailsQuery } from "@/hooks/api/lists";

import * as UI from "./";
import * as Styled from "./styles/listHeader.styled";

const ListHeader: React.FC = memo(() => {
  const { data, status } = useGetListDetailsQuery();

  return status.loading ? (
    <UI.ListHeadSkeleton />
  ) : (
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

          <UI.ListActions authorId={data.author._id} />
        </div>
      </div>
    </Styled.ListHeader>
  );
});

export default ListHeader;
