import existsIn from "./existsIn";

type ToggleArrayItemParamsT<ArrayItemT> = {
  array: Array<ArrayItemT>;
  itemToAdd: ArrayItemT;
  filterBy: string;
  toggle?: boolean;
  autoToggle?: boolean;
  itemKeyToToggle?: string;
};

/**
 * Toggles an item in an array.
 * If `toggle` is true, it removes the item matching `filterBy`.
 * If `toggle` is false, it adds the `itemToAdd` to the array.
 *
 * @param {Object} params - Parameters for toggling the item.
 * @param {Array} params.array - The array to modify.
 * @param {any} params.itemToAdd - The item to add to the array if toggle is false.
 * @param {string} params.filterBy - The value to filter by when toggling the item.
 * @param {boolean} [params.toggle] - Flag to determine whether to add or remove the item.
 * @param {boolean} [params.autoToggle=true] - Automatically determine toggle based on array content.
 * @param {string} [params.itemKeyToToggle] - required if array is object array - Key to use for filtering when array contains objects.
 * @returns {Array} - The modified array after adding or removing the item.
 */
function toggleArrayItem<ArrayItemT>({
  array,
  filterBy,
  itemKeyToToggle,
  itemToAdd,
  toggle,
  autoToggle = true,
}: ToggleArrayItemParamsT<ArrayItemT>) {
  const t = autoToggle
    ? existsIn({ candidateId: filterBy, array, as: itemKeyToToggle })
    : toggle;

  return t
    ? array.filter((arrayItem) =>
        typeof arrayItem === "string"
          ? arrayItem !== filterBy
          : typeof arrayItem === "object" &&
            typeof arrayItem[itemKeyToToggle] === "string"
          ? arrayItem[itemKeyToToggle] !== filterBy
          : true
      )
    : [...array, itemToAdd];
}

export default toggleArrayItem;
