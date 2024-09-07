import { useCommentsContext } from "@/Providers/useProviders";

import CommentsForm from "./CommentsForm";
import { CommentsPopup } from "@/components/Layouts";

const Comments: React.FC = () => {
  const { focusDefaultForm, isCommentsActive, onClosePopup } =
    useCommentsContext();

  return (
    <>
      <CommentsForm focused={focusDefaultForm} />
      {isCommentsActive && <CommentsPopup onClosePopup={onClosePopup} />}
    </>
  );
};

export default Comments;
