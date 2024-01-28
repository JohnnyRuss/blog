import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { authStore } from "@/store";
import { createSelectors, getStatus } from "./helpers";
import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "@/services/axios";

import { UserDetailsT, UpdateUserResponseT } from "@/interface/db/user.types";
import { UserStateT, UserStoreT } from "@/interface/store/user.store.types";

const initialState: UserStateT = {
  detailsStatus: getStatus("IDLE"),
  updateDetailStatus: getStatus("IDLE"),

  userDetails: null,
};

const useUserStore = create<UserStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async getUserDetails(args) {
        try {
          set(() => ({ status: getStatus("PENDING") }));

          const { data }: AxiosResponse<UserDetailsT> =
            await axiosPrivateQuery.get(`/users/${args.username}`);

          set(() => ({ userDetails: data, status: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ status: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async updateUserDetail(args) {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          const {
            data: { key, value },
          }: AxiosResponse<UpdateUserResponseT> = await axiosPrivateQuery.patch(
            `/users/${args.username}`,
            args.data
          );

          if (args.data.key !== "bio") {
            const updateUser = authStore.getState().updateUser;
            updateUser({ key, value });
          }

          set(() => ({
            userDetails: { ...get().userDetails, [key]: value },
            updateDetailStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ updateDetailStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async changeProfilePicture(args) {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<{ url: string }> =
            await axiosPrivateFormDataQuery.post(
              `/users/${args.username}/profile`,
              { file: args.file }
            );

          const updateUser = authStore.getState().updateUser;
          updateUser({ key: "avatar", value: data.url });

          set(() => ({
            userDetails: { ...get().userDetails, avatar: data.url },
            updateDetailStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ updateDetailStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async deleteProfilePicture(args) {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<{ url: string }> =
            await axiosPrivateQuery.patch(`/users/${args.username}/profile`, {
              url: args.url,
            });

          const updateUser = authStore.getState().updateUser;
          updateUser({ key: "avatar", value: data.url });

          set(() => ({
            userDetails: { ...get().userDetails, avatar: data.url },
            updateDetailStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ updateDetailStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpUserDetails() {
        set(() => ({
          detailsStatus: initialState.detailsStatus,
          userDetails: initialState.userDetails,
        }));
      },
    })),
    { name: "user" }
  )
);

export default createSelectors(useUserStore);
