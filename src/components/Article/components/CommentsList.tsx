import { useEffect, useRef } from "react";

import CommentBody from "./CommentBody";

import { generateArray } from "@/utils";

type CommentsListT = {};

const CommentsList: React.FC<CommentsListT> = () => {
  const commentsRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    commentsRef.current.scrollTo({
      behavior: "auto",
      left: 0,
      top: commentsRef.current.scrollHeight,
    });
  }, []);

  return (
    <ul className="comments-list" ref={commentsRef}>
      {generateArray(20).map((_, index) => (
        <CommentBody key={`comment-n${index}`} />
      ))}
    </ul>
  );
};

export default CommentsList;
