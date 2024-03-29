import {
  UserDetailsT,
  // API
  GetUserDetailsArgsT,
  UpdateUserArgsT,
  UpdateProfileImageArgsT,
  DeleteProfileImageArgsT,
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
  changeProfilePicture: (file: UpdateProfileImageArgsT) => Promise<void>;
  deleteProfilePicture: (url: DeleteProfileImageArgsT) => Promise<void>;
  cleanUpUserDetails: () => void;
};

type UserStoreT = UserStateT & UserActionsT;

export type { UserStateT, UserStoreT };
