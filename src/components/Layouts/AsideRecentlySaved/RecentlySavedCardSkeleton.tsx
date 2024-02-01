import Skeleton from "react-loading-skeleton";

const RecentlySavedCardSkeleton: React.FC = () => {
  return (
    <div className="saved-list__card">
      <div className="saved-list__card-user">
        <Skeleton circle={true} width={30} height={30} />

        <Skeleton width={120} />
      </div>

      <Skeleton count={2} />

      <div className="saved-list__card-footer">
        <Skeleton width={100} />
      </div>
    </div>
  );
};

export default RecentlySavedCardSkeleton;
