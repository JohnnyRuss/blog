type UserT = {
  _id: string;
  email: string;
  username: string;
  fullname: string;
  avatar: string;
};

type UserSearchT = {
  username: string;
  email: string;
  _id: string;
  avatar: string;
};

type UserDetailsT = UserT & {
  bio: string;
};

// API

type GetUserDetailsArgsT = {
  username: string;
};

type UpdateUserArgsT = {
  username: string;
  data: {
    key: string;
    value: string;
  };
};

type UpdateUserResponseT = {
  key: string;
  value: string;
};

type UpdateProfileImageArgsT = {
  file: File;
  username: string;
};

type DeleteProfileImageArgsT = {
  url: string;
  username: string;
};

type UpdateProfileImageResponseT = {
  url: string;
};

export type {
  UserT,
  UserSearchT,
  UserDetailsT,
  // API
  GetUserDetailsArgsT,
  UpdateUserArgsT,
  UpdateUserResponseT,
  UpdateProfileImageArgsT,
  DeleteProfileImageArgsT,
  UpdateProfileImageResponseT,
};
