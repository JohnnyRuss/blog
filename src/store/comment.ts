import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";
import { produce } from "immer";

import { getStatus, createSelectors } from "./helpers";

import {
  CommentStateT,
  CommentStoreT,
} from "@/interface/store/comment.store.types";
import { axiosPrivateQuery, axiosPublicQuery } from "@/services/axios";
import { logger } from "@/utils";
import { CommentT } from "@/interface/db/comment.types";

const initialState: CommentStateT = {
  addCommentStatus: getStatus("IDLE"),
  updateCommentStatus: { ...getStatus("IDLE"), commentId: "" },
  deleteCommentStatus: { ...getStatus("IDLE"), commentId: "" },
  comments: [],
  getCommentsStatus: getStatus("IDLE"),
};

const useCommentStore = create<CommentStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async addComment({ params, data }) {
        try {
          set(() => ({ addCommentStatus: getStatus("PENDING") }));

          const { data: comment }: AxiosResponse<CommentT> =
            await axiosPrivateQuery.post(`/comments/${params.articleId}`, data);

          set((state) =>
            produce(state, (draft) => {
              draft.addCommentStatus = getStatus("SUCCESS");
              draft.comments.push(comment);
            })
          );
        } catch (error: any) {
          const message = logger(error);
          set(() => ({
            addCommentStatus: getStatus("FAIL", message),
          }));
        }
      },

      async updateComment(args) {
        try {
          set(() => ({
            updateCommentStatus: {
              ...getStatus("PENDING"),
              commentId: args.params.commentId,
            },
          }));

          await axiosPrivateQuery.patch(
            `/comments/${args.params.articleId}/${args.params.commentId}`,
            args.data
          );

          set((state) =>
            produce(state, (draft) => {
              const candidateCommentIdex = draft.comments.findIndex(
                (comment) => comment._id === args.params.commentId
              );

              draft.updateCommentStatus = {
                ...getStatus("SUCCESS"),
                commentId: args.params.commentId,
              };

              if (candidateCommentIdex < 0) return;

              draft.comments.at(candidateCommentIdex).text = args.data.text;
            })
          );
        } catch (error) {
          const message = logger(error);
          set(() => ({
            updateCommentStatus: {
              ...getStatus("FAIL", message),
              commentId: args.params.commentId,
            },
          }));
        }
      },

      async deleteComment(params) {
        try {
          set(() => ({
            deleteCommentStatus: {
              ...getStatus("PENDING"),
              commentId: params.commentId,
            },
          }));

          await axiosPrivateQuery.delete(
            `/comments/${params.articleId}/${params.commentId}`
          );

          set(() => ({
            deleteCommentStatus: {
              ...getStatus("SUCCESS"),
              commentId: params.commentId,
            },
            comments: get().comments.filter((c) => c._id !== params.commentId),
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({
            deleteCommentStatus: {
              ...getStatus("FAIL", message),
              commentId: params.commentId,
            },
          }));
        }
      },

      async getComments(params) {
        try {
          set(() => ({
            getCommentsStatus: getStatus("PENDING"),
          }));

          const { data }: AxiosResponse<CommentT> = await axiosPublicQuery.get(
            `/comments/${params.articleId}`
          );

          set(() => ({
            comments: data,
            getCommentsStatus: getStatus("SUCCESS"),
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({
            getCommentsStatus: getStatus("FAIL", message),
          }));
        }
      },

      cleanUpComments() {
        set(() => ({ comments: [] }));
      },
    })),
    { name: "comments" }
  )
);

export default createSelectors(useCommentStore);
