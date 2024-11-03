import { LoadingStatusT } from "@/interface/store/common.types";
import { UserDetailsT } from "@/interface/db/user.types";

type UserFollowStateT = {
  usersToFollowStatus: LoadingStatusT;
  usersToFollow: Array<UserDetailsT>;
  followingUsers: Array<UserDetailsT>;
  followingUsersStatus: LoadingStatusT;
  followUserStatus: LoadingStatusT;
};

type UserFollowActionsT = {
  getUsersToFollow: (limit?: number) => Promise<void>;
  cleanUpUsersToFollow: () => void;
  getFollowingUsers: () => Promise<void>;
  cleanUpFollowingUsers: () => void;
  followUser: (args: { userId: string }) => Promise<void>;
};

type UserFollowStoreT = UserFollowStateT & UserFollowActionsT;

export type { UserFollowStateT, UserFollowStoreT };
