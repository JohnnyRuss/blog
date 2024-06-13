import { userFollowStore } from "@/store";

export default function useFollowUserQuery(userId: string) {
  const follow = userFollowStore.use.followUser();
  const status = userFollowStore.use.followUserStatus();

  const followQuery = async () => await follow({ userId });

  return { status, followQuery };
}
