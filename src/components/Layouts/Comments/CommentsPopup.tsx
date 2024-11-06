import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";
import { Close } from "@/components/Layouts/Icons";
import { SectionTitle } from "@/components/Layouts";

import * as Styled from "./styles/commentsPopup.styled";

type CommentsPopUpT = {
  onClosePopup: () => void;
  showCommentsForm?: boolean;
  showCommentOptions?: boolean;
};

const CommentsPopup: React.FC<CommentsPopUpT> = ({
  onClosePopup,
  showCommentsForm = true,
  showCommentOptions = true,
}) => {
  return (
    <Styled.CommentsPopup className="scroll-block">
      <div className="comments-popup__header">
        <SectionTitle title="Comments" />

        <button className="close-btn" onClick={onClosePopup}>
          <Close />
        </button>
      </div>

      <div className="comments-popup__content-box--container">
        <div className="content-box">
          <CommentsList showCommentOptions={showCommentOptions} />

          {showCommentsForm && <CommentsForm focused={true} />}
        </div>
      </div>
    </Styled.CommentsPopup>
  );
};

export default CommentsPopup;
