import * as Styled from "./styles/comments.styled";
import { Send } from "@/components/Layouts/Icons";
import { TextareaField } from "@/components/Layouts/Form";

type CommentsFormT = {
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
};

const CommentsForm: React.FC<CommentsFormT> = ({ comment, setComment }) => {
  return (
    <Styled.CommentsForm data-comment-form>
      <TextareaField
        message=""
        hasError={false}
        placeholder="leave a comment"
        fieldProps={{
          name: "comment",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value),
          value: comment,
        }}
      />

      <button>
        <Send />
      </button>
    </Styled.CommentsForm>
  );
};

export default CommentsForm;
