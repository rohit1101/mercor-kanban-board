const itemsForCol = [
  { id: crypto.randomUUID(), content: "Task 1" },
  { id: crypto.randomUUID(), content: "Task 2" },
  { id: crypto.randomUUID(), content: "Task 3" },
  { id: crypto.randomUUID(), content: "Task 4" },
  { id: crypto.randomUUID(), content: "Task 5" },
  { id: crypto.randomUUID(), content: "Task 6" },
  { id: crypto.randomUUID(), content: "Task 7" },
  { id: crypto.randomUUID(), content: "Task 8" },
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
