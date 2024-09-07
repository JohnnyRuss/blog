import {
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
  DeleteAccountArgsT,
} from "@/interface/db/auth.types";
import { UserT } from "@/interface/db/user.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type AuthStateT = {
  status: LoadingStatusT;
  user: UserT;
};

type AuthActionsT = {
  login: (args: {
    params: SignInArgsT;
    args?: { redirect: boolean };
  }) => Promise<void>;
  register: (args: {
    params: SignUpArgsT;
    args?: { redirect: boolean };
  }) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (args: ForgotPasswordArgsT) => Promise<void>;
  confirmEmail: (args: ConfirmEmailArgsT) => Promise<void>;
  updatePassword: (args: UpdatePasswordArgsT) => Promise<void>;
  deleteAccount: (args: DeleteAccountArgsT) => Promise<void>;
  updateUser: (args: { key: string; value: string }) => void;
  clearUser: () => void;
};

type AuthStoreT = AuthStateT & AuthActionsT;

export type { AuthStoreT, AuthStateT };
