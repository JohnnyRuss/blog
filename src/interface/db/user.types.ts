type EditProfileFormT = {};

type UserT = {
  _id: string;
  email: string;
  username: string;
  avatar: string;
};

type UserSearchT = {
  username: string;
  email: string;
  _id: string;
  avatar: string;
};

type GetGuestArgsT = {
  userId: string;
};

type UpdateUserArgsT = {
  userId: string;
  data: EditProfileFormT;
};

type UpdateProfileImageArgsT = {
  file: File;
  userId: string;
};

type UpdateProfileImageResponseT = {
  url: string;
};

export type {
  UserT,
  UserSearchT,
  GetGuestArgsT,
  UpdateUserArgsT,
  UpdateProfileImageArgsT,
  UpdateProfileImageResponseT,
};
