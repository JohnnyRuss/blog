type CommentT = {
  _id: string;
  text: string;
  author: CommentAuthorT;
  articleId: string;
  createdAt: string;
};

type CommentAuthorT = {
  _id: string;
  username: string;
  fullname: string;
  email: string;
  avatar: string;
};

type AddCommentArgsT = {
  params: { articleId: string };
  data: Omit<CommentT, "author" | "createdAt" | "_id"> & {
    text: string;
    author: string;
    articleId: string;
  };
};

type UpdateCommentArgsT = {
  params: { commentId: string; articleId: string };
  data: { text: string };
};

type DeleteCommentArgsT = { commentId: string; articleId: string };

type GetCommentsArgsT = { articleId: string };

export type {
  CommentT,
  AddCommentArgsT,
  GetCommentsArgsT,
  UpdateCommentArgsT,
  DeleteCommentArgsT,
};
