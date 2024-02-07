import Skeleton from "react-loading-skeleton";

import { generateArray } from "@/utils";

const CategoriesSkeleton: React.FC = () => {
  return (
    <ul className="categories__list">
      {generateArray(6).map((id) => (
        <li key={id}>
          <Skeleton height="55px" width="200px" style={{ maxWidth: "100%" }} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesSkeleton;
