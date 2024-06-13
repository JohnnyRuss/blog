import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useGetCategoriesQuery } from "@/hooks/api/categories";
import { animateTop, animateBottom } from "@/styles/animations";

import * as Styled from "./categories.styled";
import CategoriesSkeleton from "./CategoriesSkeleton";
import { SectionTitle, CategoryChip } from "@/components/Layouts";

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const { data, status } = useGetCategoriesQuery({});

  const onCategory = (categoryQuery: string) =>
    navigate(`${PATHS.blog_page}?category=${categoryQuery}`);

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
              onClick={() => onCategory(category.query)}
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
