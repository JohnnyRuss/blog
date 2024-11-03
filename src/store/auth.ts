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

          register: async ({ params, args }) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signup`, params);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              if (args.redirect) RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          login: async ({ params, args }) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              const { data }: AxiosResponse<AuthAPI_T.LoginResponseT> =
                await axiosPublicQuery.post(`/auth/signin`, params);

              const { user, accessToken } = data;

              s.setJWT(accessToken);

              set(() => ({ user, status: getStatus("SUCCESS") }));

              if (args.redirect) RouterHistory.navigate(PATHS.root_page);
            } catch (error) {
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
            }
          },

          forgotPassword: async (args) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPublicQuery.patch(`/auth/forgot-password`, args);

              set(() => ({ status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.confirm_email_page, {
                state: { isProcessingPasswordUpdate: true },
              });
            } catch (error) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          confirmEmail: async (args) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPublicQuery.put("/auth/forgot-password", args);

              set(() => ({ status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.update_password_page, {
                state: { emailIsConfirmed: true },
              });
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          updatePassword: async (args) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPublicQuery.post("/auth/forgot-password", args);

              set(() => ({ status: getStatus("SUCCESS") }));

              RouterHistory.navigate(PATHS.auth_page);
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
              throw error;
            }
          },

          deleteAccount: async (args) => {
            try {
              set(() => ({ status: getStatus("PENDING") }));

              await axiosPrivateQuery.post(`/users/${args.userId}/delete`, {
                password: args.password,
              });

              s.removeJWT();

              set(() => ({
                user: initialState.user,
                status: getStatus("SUCCESS"),
              }));

              const isOnPrivateRoute = PRIVATE_ROUTES.some((route) =>
                RouterHistory.location.pathname.includes(route)
              );

              if (isOnPrivateRoute) RouterHistory.navigate(PATHS.root_page);
            } catch (error: any) {
              const message = logger(error);
              set(() => ({ status: getStatus("FAIL", message) }));
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

          clearUser: () => {
            set(() => ({ user: initialState.user }));
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
