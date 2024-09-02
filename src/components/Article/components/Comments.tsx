import { useCommentsContext } from "@/Providers/useProviders";

import * as Styled from "./styles/comments.styled";
import ArticleHeadActions from "./ArticleHeadActions";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import { SectionTitle, Container } from "@/components/Layouts";
import { Close } from "@/components/Layouts/Icons";

const Comments: React.FC = () => {
  const { focusDefaultForm, isCommentsActive, onClosePopup } =
    useCommentsContext();

  return (
    <>
      <Styled.Comments>
        <div className="article-actions--bar">
          <ArticleHeadActions showFollowButton={false} />
        </div>

        <CommentsForm focused={focusDefaultForm} />
      </Styled.Comments>

      {isCommentsActive && (
        <Styled.CommentsPopUp className="scroll-block">
          <Container className="comments-popup__header">
            <SectionTitle title="Comments" />

            <button className="close-btn" onClick={onClosePopup}>
              <Close />
            </button>
          </Container>

          <Container className="comments-popup__content-box--container">
            <div className="content-box">
              <CommentsList />

              <CommentsForm focused={true} />
            </div>
          </Container>
        </Styled.CommentsPopUp>
      )}
    </>
  );
};

export default Comments;
