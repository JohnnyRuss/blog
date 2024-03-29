import { create } from "zustand";
import { AxiosResponse } from "axios";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

import { logger } from "@/utils";
import { LocaleStorage as s } from "@/utils";
import { RouterHistory } from "@/config/config";
import { createSelectors, getStatus } from "./helpers";
import { axiosPublicQuery, axiosPrivateQuery } from "@/services/axios";
import { PATHS, PRIVATE_ROUTES, getNativeLocation } from "@/config/paths";

import * as AuthAPI_T from "@/interface/db/auth.types";
import { AuthStoreT, AuthStateT } from "@/interface/store/auth.store.types";

const initialState: AuthStateT = {
  status: {
    status: "IDLE",
    loading: false,
    error: false,
    message: "",
  },

  user: {
    _id: "",
    avatar: "",
    email: "",
    username: "",
    fullname: "",
  },
};

const useAuthStore = create<AuthStoreT>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...initialState,

          login: async (args: AuthAPI_T.SignInArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signin`, args);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.root_page);
            } catch (error) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          register: async (args: AuthAPI_T.SignUpArgsT) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signup`, args);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          logout: async () => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPrivateQuery.post(`/auth/logout`);

              s.removeJWT();

              set(() => ({
                user: initialState.user,
                status: getStatus("SUCCESS"),
              }));

              if (
                PRIVATE_ROUTES.some((route) =>
                  RouterHistory.location.pathname.includes(route)
                )
              )
                RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          updateUser(args) {
            if (args.key === "username") {
              const currentLocation = RouterHistory.location.pathname;
              const revalidatePath = getNativeLocation(currentLocation);

              RouterHistory.navigate(
                revalidatePath.replace(":username", args.value),
                { replace: true }
              );
            }

            set(() => ({ user: { ...get().user, [args.key]: args.value } }));
          },
        }),
        {
          name: "blog_user",
          partialize: (state) => ({ user: state.user }),
        }
      )
    ),
    { name: "authentication" }
  )
);

export default createSelectors(useAuthStore);
