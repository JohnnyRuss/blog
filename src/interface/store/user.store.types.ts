import {
  UserDetailsT,
  // API
  GetUserDetailsArgsT,
  UpdateUserArgsT,
  UpdateProfileImageArgsT,
  DeleteProfileImageArgsT,
  AddUserInterestArgsT,
  RemoveUserInterestArgsT,
} from "@/interface/db/user.types";
import { CategoryT } from "@/interface/db/category.types";
import { LoadingStatusT } from "./common.types";

type UserStateT = {
  detailsStatus: LoadingStatusT;
  updateDetailStatus: LoadingStatusT;
  userDetails: null | UserDetailsT;
  interests: Array<CategoryT>;
  recentInterests: Array<CategoryT>;
  getInterestsStatus: LoadingStatusT;
  addInterestStatus: LoadingStatusT;
  removeInterestStatus: LoadingStatusT;
};

type UserActionsT = {
  getUserDetails: (args: GetUserDetailsArgsT) => Promise<void>;
  updateUserDetail: (args: UpdateUserArgsT) => Promise<void>;
  changeProfilePicture: (file: UpdateProfileImageArgsT) => Promise<void>;
  deleteProfilePicture: (url: DeleteProfileImageArgsT) => Promise<void>;
  cleanUpUserDetails: () => void;
  getUserInterests: () => Promise<void>;
  cleanUpInterests: () => void;
  addUserInterest: (args: AddUserInterestArgsT) => Promise<void>;
  removeUserInterest: (args: RemoveUserInterestArgsT) => Promise<void>;
};

type UserStoreT = UserStateT & UserActionsT;

export type { UserStateT, UserStoreT };
