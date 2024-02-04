import * as Styled from "./styles/listAuthor.styled";
import { AuthorIdentifier, FollowButton } from "@/components/Layouts";

import { UserT } from "@/interface/db/user.types";

type ListAuthorT = {
  author: UserT;
};

const ListAuthor: React.FC<ListAuthorT> = ({ author }) => {
  return (
    <Styled.ListAuthor>
      <AuthorIdentifier author={author} />

      <FollowButton />
    </Styled.ListAuthor>
  );
};

export default ListAuthor;
