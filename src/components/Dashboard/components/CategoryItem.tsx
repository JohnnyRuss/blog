import { useState } from "react";

import { logger } from "@/utils";
import { dashboardStore } from "@/store";

import { CategoryChip, RelativeSpinner } from "@/components/Layouts";

import { CategoryT } from "@/interface/db/category.types";

type CategoryItemT = {
  category: CategoryT;
};

const CategoryItem: React.FC<CategoryItemT> = ({ category }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const uploadCategoryThumbnail = dashboardStore.use.uploadCategoryThumbnail();

  const onThumbnailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      setLoading(true);

      setFile(file);
      uploadCategoryThumbnail({ thumbnail: file, categoryId: category._id });
    } catch (error) {
      logger(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="category-item__layover">
      <CategoryChip
        category={{
          ...category,
          thumbnail: category.thumbnail
            ? category.thumbnail
            : file
            ? URL.createObjectURL(file)
            : "",
        }}
      />
      <div className="category-actions">
        <label htmlFor={category._id} className="change-img__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M7.574 4.336A3 3 0 0 1 10.07 3h3.86a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 18.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h.93a1 1 0 0 0 .832-.445l.812-1.22zM10 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input
          hidden
          type="file"
          accept="image/*"
          id={category._id}
          onChange={onThumbnailChange}
        />
        <button>c</button>
      </div>

      {loading && <RelativeSpinner />}
    </div>
  );
};

export default CategoryItem;
