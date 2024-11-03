import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

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
  followUserStatus: getStatus("IDLE"),
};

const useUserFollowStore = create<UserFollowStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async getUsersToFollow(limit) {
        try {
          set(() => ({ usersToFollowStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<UserDetailsT>> =
            await axiosPrivateQuery.get(
              `/follow/suggestions${limit ? `?limit=${limit}` : ""}`
            );

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

      async followUser(args) {
        try {
          set(() => ({ followUserStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<UserDetailsT> =
            await axiosPrivateQuery.post(`/follow/${args.userId}/follow`);

          const updateFollowingLists = (
            list: Array<UserDetailsT>
          ): Array<UserDetailsT> => {
            let shallowList = [...list];

            if (shallowList.some((user) => user._id === data._id))
              shallowList = shallowList.filter((user) => user._id !== data._id);
            else shallowList.push(data);

            return shallowList;
          };

          set((state) => ({
            ...produce(state, (draft) => {
              draft.followingUsers = updateFollowingLists(draft.followingUsers);
              draft.usersToFollow = updateFollowingLists(draft.usersToFollow);
            }),

            followUserStatus: getStatus("SUCCESS"),
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ followUserStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },
    })),
    { name: "user-follow" }
  )
);

export default createSelectors(useUserFollowStore);
