import { useCategoriesQuery } from "@/hooks/api/dashboard";

import * as Styled from "./styles/categories.styled";
import CategoryItem from "./components/CategoryItem";

const ManageCategories: React.FC = () => {
  const { data } = useCategoriesQuery();

  return (
    <Styled.Categories>
      {data.map((category) => (
        <CategoryItem
          key={category._id}
          category={{ ...category, thumbnail: category.thumbnail || "" }}
        />
      ))}
    </Styled.Categories>
  );
};

export default ManageCategories;
