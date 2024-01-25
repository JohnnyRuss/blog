import {
  UserDetailsT,
  // API
  GetUserDetailsArgsT,
  UpdateUserArgsT,
} from "@/interface/db/user.types";
import { LoadingStatusT } from "./common.types";

type UserStateT = {
  detailsStatus: LoadingStatusT;
  updateDetailStatus: LoadingStatusT;
  userDetails: null | UserDetailsT;
};

type UserActionsT = {
  getUserDetails: (args: GetUserDetailsArgsT) => Promise<void>;
  updateUserDetail: (args: UpdateUserArgsT) => Promise<void>;
  changeProfilePicture: (file: File) => Promise<void>;
  deleteProfilePicture: (url: string) => Promise<void>;
};

type UserStoreT = UserStateT & UserActionsT;

export type { UserStateT, UserStoreT };
