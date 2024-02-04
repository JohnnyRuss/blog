import { userStore } from "@/store";
import { extractUserFirstName } from "@/utils";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import { UserLists as UserListsRow } from "./components/UserLists";

const UserLists: React.FC = () => {
  const user = userStore.use.userDetails();
  const userFirstName = extractUserFirstName(user.fullname);

  const { user: activeUser } = useCheckIsAuthenticatedUser();
  const isActiveUserProfile = user.username === activeUser?.username;
  const emptyMessage = isActiveUserProfile
    ? "You haven't lists yet"
    : `${userFirstName} hasn't Public lists`;

  return (
    <div>
      <UserListsRow emptyMessage={emptyMessage} />
    </div>
  );
};

export default UserLists;
