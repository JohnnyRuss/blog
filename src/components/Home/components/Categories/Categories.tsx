import { motion } from "framer-motion";

import { useGetCategoriesQuery } from "@/hooks/api/categories";
import { animateTop, animateBottom } from "@/styles/animations";

import * as Styled from "./categories.styled";
import CategoriesSkeleton from "./CategoriesSkeleton";
import { SectionTitle, CategoryChip } from "@/components/Layouts";

const Categories: React.FC = () => {
  const { data, status } = useGetCategoriesQuery();

  return (
    <Styled.Categories>
      <SectionTitle title="Topics" />

      {status.loading ? (
        <CategoriesSkeleton />
      ) : (
        <ul className="categories__list">
          {data.map((category, index) => (
            <motion.li
              key={category._id}
              {...(index % 2 === 1
                ? animateBottom({ inView: true, once: true })
                : animateTop({ inView: true, once: true }))}
            >
              <CategoryChip category={category} />
            </motion.li>
          ))}
        </ul>
      )}
    </Styled.Categories>
  );
};

export default Categories;
