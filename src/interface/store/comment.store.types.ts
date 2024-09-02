import {
  CommentT,
  AddCommentArgsT,
  UpdateCommentArgsT,
  DeleteCommentArgsT,
  GetCommentsArgsT,
} from "@/interface/db/comment.types";
import { LoadingStatusT } from "@/interface/store/common.types";

type CommentStateT = {
  addCommentStatus: LoadingStatusT;
  updateCommentStatus: LoadingStatusT & { commentId: string };
  deleteCommentStatus: LoadingStatusT & { commentId: string };
  comments: Array<CommentT>;
  getCommentsStatus: LoadingStatusT;
};

////////////////////////////////////////
//////////////ACTIONS//////////////////
//////////////////////////////////////

type CommentActionsT = {
  addComment: (params: AddCommentArgsT) => Promise<void>;
  updateComment: (params: UpdateCommentArgsT) => Promise<void>;
  deleteComment: (params: DeleteCommentArgsT) => Promise<void>;
  getComments: (params: GetCommentsArgsT) => Promise<void>;
  cleanUpComments: () => void;
};

type CommentStoreT = CommentActionsT & CommentStateT;

export type { CommentStateT, CommentStoreT };
