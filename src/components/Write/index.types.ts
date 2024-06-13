import { CategoryT } from "@/interface/db/category.types";
import { MultiSelectOptionT } from "@/interface/ui/commons.types";

type CategoryDropdownOptionT = MultiSelectOptionT<{
  color: string;
  _id: string;
}>;
type CategoryDropdownInvertedOptionT = CategoryT & { isNew?: boolean };

type OnSelectCategoryReturnT = {
  isNew: boolean;
  lastIndex: number;
  values: Array<CategoryDropdownOptionT>;
};

type OnSelectCategoryArgsT = {
  value: OnSelectCategoryReturnT;
  fieldChangeHandler: (args: Array<CategoryDropdownInvertedOptionT>) => void;
};

export type {
  CategoryDropdownOptionT,
  OnSelectCategoryReturnT,
  OnSelectCategoryArgsT,
  CategoryDropdownInvertedOptionT,
};
