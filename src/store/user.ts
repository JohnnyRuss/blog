import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { authStore } from "@/store";
import { toggleArrayItem, LocaleStorage as s } from "@/utils";
import { createSelectors, getStatus } from "./helpers";
import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "@/services/axios";

import {
  UserDetailsT,
  UpdateUserResponseT,
  GetUserInterestsResponseT,
} from "@/interface/db/user.types";
import { CategoryT } from "@/interface/db/category.types";
import { UserStateT, UserStoreT } from "@/interface/store/user.store.types";

const initialState: UserStateT = {
  detailsStatus: getStatus("IDLE"),
  updateDetailStatus: getStatus("IDLE"),
  userDetails: {
    _id: "",
    avatar: "",
    bio: "",
    email: "",
    fullname: "",
    username: "",
  },
  interests: [],
  recentInterests: [],
  getInterestsStatus: getStatus("IDLE"),
  addInterestStatus: getStatus("IDLE"),
  removeInterestStatus: getStatus("IDLE"),
};

const useUserStore = create<UserStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async getUserDetails(args) {
        try {
          set(() => ({ detailsStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<UserDetailsT> =
            await axiosPrivateQuery.get(`/users/${args.username}`);

          set(() => ({
            userDetails: data,
            detailsStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ detailsStatus: getStatus("FAIL", message) }));
        }
      },

      async updateUserDetail(args) {
        try {
          set(() => ({ updateDetailStatus: getStatus("PENDING") }));

          const {
            data: { key, value, accessToken },
          }: AxiosResponse<UpdateUserResponseT> = await axiosPrivateQuery.patch(
            `/users/${args.username}`,
            args.data
          );

          if (args.data.key === "username") {
            if (accessToken) s.setJWT(accessToken);
            else {
              const logout = authStore.getState().logout;
              await logout();
              return;
            }
          }

          if (args.data.key !== "bio") {
            const updateUser = authStore.getState().updateUser;
            updateUser({ key, value });
          }

          set(() => ({
            userDetails: { ...get().userDetails, [key]: value },
            updateDetailStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
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
          const message = logger(error);
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
          const message = logger(error);
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

      /////////////////////
      // USER INTERESTS //
      ///////////////////

      async getUserInterests() {
        try {
          set(() => ({ getInterestsStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<GetUserInterestsResponseT> =
            await axiosPrivateQuery.get(`/trace/interests`);

          set(() => ({
            interests: data,
            getInterestsStatus: getStatus("SUCCESS"),
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ getInterestsStatus: getStatus("FAIL", message) }));
        }
      },

      async addUserInterest({ categoryId }) {
        try {
          set(() => ({ addInterestStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<CategoryT> =
            await axiosPrivateQuery.patch(`/trace/interests/${categoryId}`);

          set((state) =>
            produce(state, (draft) => {
              draft.recentInterests = toggleArrayItem({
                itemToAdd: data,
                filterBy: data._id,
                itemKeyToToggle: "_id",
                array: draft.recentInterests,
              });

              draft.addInterestStatus = getStatus("SUCCESS");
            })
          );
        } catch (error) {
          const message = logger(error);

          set(() => ({ addInterestStatus: getStatus("FAIL", message) }));
        }
      },

      async removeUserInterest({ categoryId }) {
        try {
          set(() => ({ removeInterestStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete(`/trace/interests/${categoryId}`);

          set((state) =>
            produce(state, (draft) => {
              draft.recentInterests = draft.recentInterests.filter(
                (interest) => interest._id !== categoryId
              );

              draft.interests = draft.interests.filter(
                (interest) => interest._id !== categoryId
              );

              draft.removeInterestStatus = getStatus("SUCCESS");
            })
          );
        } catch (error) {
          const message = logger(error);

          set(() => ({
            removeInterestStatus: getStatus("FAIL", message),
          }));
        }
      },

      cleanUpInterests() {
        set(() => ({ interests: [], recentInterests: [] }));
      },
    })),
    { name: "user" }
  )
);

export default createSelectors(useUserStore);
