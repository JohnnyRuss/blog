/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useCommentsContext } from "@/Providers/useProviders";

import * as Styled from "./styles/comments.styled";
import { Send } from "@/components/Layouts/Icons";
import { TextareaField } from "@/components/Layouts/Form";

type CommentsFormT = {
  focused?: boolean;
};

const CommentsForm: React.FC<CommentsFormT> = ({ focused = false }) => {
  const { comment, setComment, onAddComment, focusTextarea, textareaRef } =
    useCommentsContext();

  useEffect(() => {
    if (!focused) return;
    focusTextarea();
  }, [focused]);

  return (
    <Styled.CommentsForm data-comment-form onSubmit={onAddComment}>
      <TextareaField
        message=""
        hasError={false}
        placeholder="leave a comment"
        ref={textareaRef}
        fieldProps={{
          name: "comment",
          value: comment,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value),
        }}
      />

      <button type="submit">
        <Send />
      </button>
    </Styled.CommentsForm>
  );
};

export default CommentsForm;
