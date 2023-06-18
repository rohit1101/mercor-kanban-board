const itemsForCol = [
  { id: crypto.randomUUID(), content: "Task 1" },
  { id: crypto.randomUUID(), content: "Task 2" },
];

export const cols = {
  [crypto.randomUUID()]: {
    name: "Todo",
    items: itemsForCol,
  },
  [crypto.randomUUID()]: {
    name: "In Progress",
    items: [],
  },
  [crypto.randomUUID()]: {
    name: "Done",
    items: [],
  },
};
