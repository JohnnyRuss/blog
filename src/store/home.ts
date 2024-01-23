import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { createSelectors, getStatus } from "./helpers";

import { HomeStateT, HomeStoreT } from "@/interface/store/home.store.types";

const initialState: HomeStateT = {
  status: getStatus("IDLE"),

  topArticle: {
    _id: "",
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
          set(() => ({
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
