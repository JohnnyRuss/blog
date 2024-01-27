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
      <SectionTitle title="Categories" />

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
              <CategoryChip
                bgColor={category?.color}
                title={category?.title}
                img="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.li>
          ))}
        </ul>
      )}
    </Styled.Categories>
  );
};

export default Categories;
