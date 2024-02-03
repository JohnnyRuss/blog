import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";

import {
  UserFollowStateT,
  UserFollowStoreT,
} from "@/interface/store/userFollow.store.types";
import { UserDetailsT } from "@/interface/db/user.types";

const initialState: UserFollowStateT = {
  usersToFollow: [],
  usersToFollowStatus: getStatus("IDLE"),
  followingUsers: [],
  followingUsersStatus: getStatus("IDLE"),
};

const useUserFollowStore = create<UserFollowStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async getUsersToFollow() {
        try {
          set(() => ({ usersToFollowStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<UserDetailsT>> =
            await axiosPrivateQuery.get(`/follow/suggestions`);

          set(() => ({
            usersToFollow: data,
            usersToFollowStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);

          set(() => ({
            usersToFollowStatus: getStatus("FAIL", message),
          }));

          throw error;
        }
      },

      cleanUpUsersToFollow() {
        set(() => ({
          usersToFollow: initialState.usersToFollow,
          usersToFollowStatus: initialState.usersToFollowStatus,
        }));
      },

      async getFollowingUsers() {
        try {
          set(() => ({ followingUsersStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<UserDetailsT>> =
            await axiosPrivateQuery.get(`/follow`);

          set(() => ({
            followingUsers: data,
            followingUsersStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);

          set(() => ({
            followingUsersStatus: getStatus("FAIL", message),
          }));

          throw error;
        }
      },

      cleanUpFollowingUsers() {
        set(() => ({
          followingUsers: initialState.followingUsers,
          followingUsersStatus: initialState.followingUsersStatus,
        }));
      },
    })),
    { name: "user-follow" }
  )
);

export default createSelectors(useUserFollowStore);
