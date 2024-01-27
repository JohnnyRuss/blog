import Skeleton from "react-loading-skeleton";

const HeroSkeleton: React.FC = () => {
  return (
    <article className="hero__post">
      <div className="hero__post-fig">
        <Skeleton width="100%" height="100%" />
      </div>

      <div className="hero__post-content">
        <Skeleton
          count={2}
          width="800px"
          height="30px"
          style={{ maxWidth: "100%" }}
        />

        <div>
          <Skeleton count={3} width="800px" style={{ maxWidth: "100%" }} />
          <Skeleton width="800px" style={{ maxWidth: "50%" }} />
          <Skeleton count={2} width="800px" style={{ maxWidth: "100%" }} />
          <Skeleton width="800px" style={{ maxWidth: "30%" }} />
        </div>

        <Skeleton width="150px" style={{ maxWidth: "100%" }} />
      </div>
    </article>
  );
};

export default HeroSkeleton;
