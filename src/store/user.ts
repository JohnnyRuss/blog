import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { createSelectors, getStatus } from "./helpers";
import { axiosPrivateQuery } from "@/services/axios";

import { UserDetailsT } from "@/interface/db/user.types";
import { UserStateT, UserStoreT } from "@/interface/store/user.store.types";

const initialState: UserStateT = {
  detailsStatus: getStatus("IDLE"),
  updateDetailStatus: getStatus("IDLE"),

  userDetails: null,
};

const useUserStore = create<UserStoreT>()(
  devtools(
    immer((set) => ({
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

      async updateUserDetail() {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          // const { data }: AxiosResponse<any> = await axiosPrivateQuery.get();

          set(() => ({ updateDetailStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ updateDetailStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async changeProfilePicture() {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          // const { data }: AxiosResponse<any> = await axiosPrivateQuery.get();

          set(() => ({ updateDetailStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ updateDetailStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async deleteProfilePicture() {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          // const { data }: AxiosResponse<any> = await axiosPrivateQuery.get();

          set(() => ({ updateDetailStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ updateDetailStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },
    })),
    { name: "user" }
  )
);

export default createSelectors(useUserStore);
