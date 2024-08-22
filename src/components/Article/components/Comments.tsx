import { useState } from "react";

import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/comments.styled";
import ArticleHeadActions from "./ArticleHeadActions";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import { SectionTitle, Container } from "@/components/Layouts";
import { Close } from "@/components/Layouts/Icons";

type CommentsT = {};

const Comments: React.FC<CommentsT> = () => {
  const { removeParam, getParam } = useSearchParams();

  const [comment, setComment] = useState("");

  const onClose = () => removeParam("comments");
  const isCommentsActive = getParam("comments") === "1";

  return (
    <>
      <Styled.Comments>
        <div className="article-actions--bar">
          <ArticleHeadActions showFollowButton={false} />
        </div>

        <CommentsForm comment={comment} setComment={setComment} />
      </Styled.Comments>

      {isCommentsActive && (
        <Styled.CommentsPopUp className="scroll-block">
          <Container className="comments-popup__header">
            <SectionTitle title="Comments" />

            <button className="close-btn" onClick={onClose}>
              <Close />
            </button>
          </Container>

          <Container className="comments-popup__content-box--container">
            <div className="content-box">
              <CommentsList />

              <CommentsForm comment={comment} setComment={setComment} />
            </div>
          </Container>
        </Styled.CommentsPopUp>
      )}
    </>
  );
};

export default Comments;
