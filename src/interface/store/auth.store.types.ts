import { UserT } from "@/interface/db/user.types";
import { SignInArgsT, SignUpArgsT } from "../db/auth.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type AuthStateT = {
  status: LoadingStatusT;
  user: UserT;
};

type AuthActionsT = {
  login: (args: SignInArgsT) => Promise<void>;
  register: (args: SignUpArgsT) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (args: { key: string; value: string }) => void;
};

type AuthStoreT = AuthStateT & AuthActionsT;

export type { AuthStoreT, AuthStateT };
