import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable";

export const removeAtIndex = (array, idx) => {
  const firstHalf = array.slice(0, idx);
  const secondHalf = array.slice(idx + 1);
  return firstHalf.concat(secondHalf);
};

export const insertAtIndex = (array, item, idx) => [
  ...array.slice(0, idx),
  item,
  ...array.slice(idx),
];

export const arrayMove = (array, oldIdx, newIdx) => {
  return dndKitArrayMove(array, oldIdx, newIdx);
};
