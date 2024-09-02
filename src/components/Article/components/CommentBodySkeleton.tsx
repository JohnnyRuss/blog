import Skeleton from "react-loading-skeleton";

const CommentBodySkeleton: React.FC = () => {
  return (
    <li className="comments-list--item">
      <Skeleton circle width={50} height={50} />

      <div className="comments-list--item__content">
        <Skeleton width={160} />

        <Skeleton width={"100%"} />
        <Skeleton width={"100%"} />
        <Skeleton width={"35%"} />

        <Skeleton width={100} />
      </div>
    </li>
  );
};

export default CommentBodySkeleton;
