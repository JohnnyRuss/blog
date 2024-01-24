import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { axiosPrivateQuery } from "@/services/axios";
import { createSelectors, getStatus } from "./helpers";

import { GetHomePageResponseT } from "@/interface/db/pages.types";
import { HomeStateT, HomeStoreT } from "@/interface/store/home.store.types";

const initialState: HomeStateT = {
  status: getStatus("IDLE"),

  categories: [],

  topArticle: {
    _id: "",
    slug: "",
    author: {
      _id: "",
      avatar: "",
      username: "",
    },
    body: "",
    categories: [],
    createdAt: "",
    title: "",
  },

  editorsPick: [],

  popularArticles: [],

  recentArticles: [],
};

const useHomeStore = create<HomeStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async getHome() {
        try {
          set(() => ({ status: getStatus("PENDING") }));

          const {
            data: {
              editorsPick,
              popularArticles,
              recentArticles,
              topArticle,
              categories,
            },
          }: AxiosResponse<GetHomePageResponseT> = await axiosPrivateQuery.get(
            "/pages/home"
          );

          set(() => ({
            categories,
            editorsPick,
            popularArticles,
            recentArticles,
            topArticle,
            status: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ status: getStatus("FAIL", message) }));
          throw error;
        }
      },
    }))
  )
);

export default createSelectors(useHomeStore);
