import { Dropdown, DropdownItem } from "@/components/Layouts";
import { Options, Delete, Edit } from "@/components/Layouts/Icons";

type CommentOptionsDropdownT = {
  isCommentAuthor: boolean;
  isArticleAuthor: boolean;
  onDeleteComment: () => void;
  onUpdateComment: () => void;
};

const CommentOptionsDropdown: React.FC<CommentOptionsDropdownT> = ({
  isArticleAuthor,
  isCommentAuthor,
  onDeleteComment,
  onUpdateComment,
}) => {
  return (
    <Dropdown Button={<Options />} dropdownClass="comment-options" data={[]}>
      {(onToggleDropdown) => (
        <>
          {isCommentAuthor && (
            <DropdownItem
              onSelectItem={onUpdateComment}
              onToggleDropDown={onToggleDropdown}
            >
              <span>
                <Edit />
                Update
              </span>
            </DropdownItem>
          )}

          {(isArticleAuthor || isCommentAuthor) && (
            <DropdownItem
              item={{ danger: true }}
              onSelectItem={onDeleteComment}
              onToggleDropDown={onToggleDropdown}
            >
              <span>
                <Delete />
                Delete
              </span>
            </DropdownItem>
          )}
        </>
      )}
    </Dropdown>
  );
};

export default CommentOptionsDropdown;
