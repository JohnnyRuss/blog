import { animateLeft } from "@/styles/animations";

import * as Styled from "./categories.styled";
import { CategoryChip } from "@/components/Layouts";

type CategoriesT = {};

const Categories: React.FC<CategoriesT> = () => {
  return (
    <Styled.Categories
      whileInView="onscreen"
      {...animateLeft({ inView: true, once: true })}
    >
      <CategoryChip bgColor="#01415B" title="Style" size="md" />

      <CategoryChip bgColor="#005148" title="Fashion" size="md" />

      <CategoryChip bgColor="#019587" title="Food" size="md" />

      <CategoryChip bgColor="#FFAE00" title="Travel" size="md" />

      <CategoryChip bgColor="#B33F00" title="Culture" size="md" />

      <CategoryChip bgColor="#D92525" title="Coding" size="md" />
    </Styled.Categories>
  );
};

export default Categories;
