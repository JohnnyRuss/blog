import Skeleton from "react-loading-skeleton";
import { v4 as uuid } from "uuid";

const CategoriesSkeleton: React.FC = () => {
  return (
    <ul className="categories__list">
      {Array.from(new Array(6)).map(() => (
        <li key={uuid()}>
          <Skeleton height="55px" width="200px" style={{ maxWidth: "100%" }} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesSkeleton;
