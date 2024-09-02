/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect, useRef } from "react";

import {
  useAddCommentQuery,
  useDeleteCommentQuery,
  useUpdateCommentQuery,
  useGetCommentsQuery,
} from "@/hooks/api/comments";
import { articleStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";
import { useAppUIContext } from "./useProviders";
import { useCheckIsAuthenticatedUser } from "@/hooks/auth";

import { CommentT } from "@/interface/db/comment.types";

interface CommentsContextT {
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  focusDefaultForm: boolean;
  setFocusDefaultForm: React.Dispatch<React.SetStateAction<boolean>>;
  onClosePopup: () => void;
  isCommentsActive: boolean;
  onAddComment: (e: React.FormEvent) => Promise<void>;
  commentsListRef: React.Ref<HTMLUListElement | null>;
  textareaRef: React.Ref<HTMLTextAreaElement | null>;
  focusTextarea: () => void;
  onStartUpdateComment: (args: { comment: CommentT }) => void;
  onStartDeleteComment: (params: {
    commentId: string;
    commentAuthorId: string;
    articleAuthorId: string;
  }) => void;
}

interface CommentsProviderT {
  children: React.ReactNode;
}

export const CommentsContext = createContext<CommentsContextT>({
  comment: "",
  setComment: () => {},
  focusDefaultForm: false,
  setFocusDefaultForm: () => {},
  onClosePopup: () => {},
  isCommentsActive: false,
  onAddComment: async () => {},
  commentsListRef: null,
  textareaRef: null,
  focusTextarea: () => {},
  onStartDeleteComment: () => {},
  onStartUpdateComment: () => {},
});

const CommentsProvider: React.FC<CommentsProviderT> = ({ children }) => {
  const { removeParam, getParam } = useSearchParams();

  const articleId = articleStore.use.article()._id;
  const { isAuthenticated, decodedUser } = useCheckIsAuthenticatedUser(true);

  const [focusDefaultForm, setFocusDefaultForm] = useState(false);

  /////////////////////////////////
  //////////// Utils /////////////
  ///////////////////////////////
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const focusTextarea = () => {
    if (!textareaRef.current) return;

    textareaRef.current.focus();
    textareaRef.current.setSelectionRange(comment.length, comment.length);
  };

  /////////////////////////////////
  // Scroll to the last comment //
  ///////////////////////////////

  const isCommentsActive = getParam("comments") === "1";
  const commentsListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!commentsListRef.current || !isCommentsActive) return;

    commentsListRef.current.scrollTo({
      left: 0,
      behavior: "auto",
      top: commentsListRef.current.scrollHeight,
    });
  }, [commentsListRef.current?.scrollHeight, isCommentsActive]);

  /////////////////////////
  // Add/Update Comment //
  ///////////////////////

  const { onAddCommentQuery } = useAddCommentQuery();
  const { onUpdateCommentQuery } = useUpdateCommentQuery();

  const [comment, setComment] = useState("");
  const [commentToUpdate, setCommentToUpdate] = useState<
    (Omit<CommentT, "author" | "createdAt"> & { authorId: string }) | null
  >(null);

  const onStartUpdateComment = ({
    comment: candidateComment,
  }: {
    comment: CommentT;
  }) => {
    if (!isAuthenticated || decodedUser._id !== candidateComment.author._id)
      return;

    const { _id, articleId, author, text } = candidateComment;

    setComment(candidateComment.text);
    setCommentToUpdate({ _id, authorId: author._id, text, articleId });

    focusTextarea();
  };

  const onAddComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!articleId || !comment || !isAuthenticated) return;

    if (commentToUpdate && decodedUser._id === commentToUpdate.authorId) {
      setCommentToUpdate(null);
      await onUpdateCommentQuery({
        data: { text: comment },
        params: { articleId, commentId: commentToUpdate._id },
      });
    } else {
      await onAddCommentQuery({
        params: { articleId },
        data: { articleId, text: comment, author: decodedUser._id },
      });
    }

    setComment("");
    setFocusDefaultForm(false);
  };

  /////////////////////
  // Delete comment //
  ///////////////////

  const { activateDialog } = useAppUIContext();
  const { onDeleteCommentQuery } = useDeleteCommentQuery();

  const onStartDeleteComment = (params: {
    commentId: string;
    commentAuthorId: string;
    articleAuthorId: string;
  }) => {
    if (
      !isAuthenticated ||
      (decodedUser._id !== params.commentAuthorId &&
        decodedUser._id !== params.articleAuthorId)
    )
      return;

    activateDialog({
      type: "danger",
      title: "Delete Comment",
      target: "<Comment>",
      message: "Are you sure you want to delete this comment?",
      onConfirm: async () =>
        await onDeleteCommentQuery({ articleId, commentId: params.commentId }),
    });
  };

  ///////////////////
  // Get Comments //
  /////////////////

  const { onGetCommentsQuery, cleanUpComments, data } = useGetCommentsQuery();

  useEffect(() => {
    if (!articleId || !isCommentsActive || data.length > 0) return;

    (async () => await onGetCommentsQuery({ articleId }))();
  }, [isCommentsActive, articleId]);

  useEffect(() => {
    return () => {
      cleanUpComments();
    };
  }, [articleId]);

  /////////////////////////
  // Close Popup Window //
  ///////////////////////

  const onClosePopup = () => {
    removeParam("comments");
    if (comment) setFocusDefaultForm(true);
  };

  return (
    <CommentsContext.Provider
      value={{
        comment,
        setComment,
        focusDefaultForm,
        setFocusDefaultForm,
        onClosePopup,
        isCommentsActive,
        onAddComment,
        commentsListRef,
        onStartDeleteComment,
        onStartUpdateComment,
        textareaRef,
        focusTextarea,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
