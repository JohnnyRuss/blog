import Skeleton from "react-loading-skeleton";

const ArticleBodySkeleton: React.FC = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Skeleton count={12} />
      <Skeleton width="50%" />
      <Skeleton height="20vw" borderRadius={10} />
      <Skeleton count={8} />
      <Skeleton width="80%" />
      <Skeleton count={8} />
      <Skeleton width="20%" />
      <Skeleton count={10} />
      <Skeleton width="40%" />
    </div>
  );
};

export default ArticleBodySkeleton;
