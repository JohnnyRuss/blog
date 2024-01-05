import { authStore } from "@/store";

export default function useLogoutQuery() {
  const logout = authStore.use.logout();

  const onLogout = () => logout();

  return { onLogout };
}
