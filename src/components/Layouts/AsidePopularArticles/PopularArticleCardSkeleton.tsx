import Skeleton from "react-loading-skeleton";

const PopularArticleCardSkeleton: React.FC = () => {
  return (
    <li className="popular-item">
      <Skeleton height="22px" width="100px" borderRadius="50px" />

      <Skeleton count={2} />

      <div className="popular-item__footer">
        <Skeleton width="130px" />
        &nbsp;
        <Skeleton width="150px" />
      </div>
    </li>
  );
};

export default PopularArticleCardSkeleton;
