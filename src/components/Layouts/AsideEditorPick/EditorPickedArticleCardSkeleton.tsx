import Skeleton from "react-loading-skeleton";

const EditorPickedArticleCardSkeleton: React.FC = () => {
  return (
    <li className="editor-pick__item">
      <Skeleton width={70} height={70} circle={true} />

      <div className="editor-pick__item-content">
        <Skeleton height="22px" width="100px" borderRadius="50px" />

        <Skeleton count={2} />

        <div className="editor-pick__item-footer">
          <Skeleton width="130px" />
          &nbsp;
          <Skeleton width="150px" />
        </div>
      </div>
    </li>
  );
};

export default EditorPickedArticleCardSkeleton;
