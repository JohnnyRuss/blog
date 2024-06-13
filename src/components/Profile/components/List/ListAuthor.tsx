/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import {
  useFollowUserQuery,
  useCheckIsFollowingUserQuery,
} from "@/hooks/api/userFollow";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import * as Styled from "./styles/listAuthor.styled";
import { AuthorIdentifier, FollowButton } from "@/components/Layouts";

import { UserT } from "@/interface/db/user.types";

type ListAuthorT = {
  author: UserT;
};

const ListAuthor: React.FC<ListAuthorT> = ({ author }) => {
  const { isAuthenticated, user } = useCheckIsAuthenticatedUser(true);
  const belongsToActiveUser = author._id === user._id;

  const { followQuery, status } = useFollowUserQuery(author._id);
  const { check, isFollowingUser } = useCheckIsFollowingUserQuery();

  const onFollow = async () => {
    if (belongsToActiveUser) return;
    await followQuery();
    await check(author._id);
  };

  useEffect(() => {
    if (belongsToActiveUser) return;
    (async () => await check(author._id))();
  }, [belongsToActiveUser, author._id]);

  return (
    <Styled.ListAuthor>
      <AuthorIdentifier author={author} />

      {isAuthenticated && author._id !== user._id && (
        <FollowButton
          onClick={onFollow}
          disabled={status.loading}
          isFollowing={isFollowingUser}
        />
      )}
    </Styled.ListAuthor>
  );
};

export default ListAuthor;
