const itemsForCol = [
  {
    id: crypto.randomUUID(),
    content: "Task 1",
    status: "Low",
    desc: "Brainstorming brings team members' diverse experience into play. ",
  },
  {
    id: crypto.randomUUID(),
    content: "Task 2",
    status: "High",
    desc: "User research helps you to create an optimal product for users.",
  },
  {
    id: crypto.randomUUID(),
    content: "Task 3",
    status: "Low",
    desc: "Low fidelity wireframes include the most basic content and visuals.",
  },
  {
    id: crypto.randomUUID(),
    content: "Task 5",
    status: "Low",
    desc: "Brainstorming brings team members' diverse experience into play. ",
  },
  {
    id: crypto.randomUUID(),
    content: "Task 7",
    status: "Low",
    desc: "Brainstorming brings team members' diverse experience into play. ",
  },
  {
    id: crypto.randomUUID(),
    content: "Task 8",
    status: "High",
    desc: "Brainstorming brings team members' diverse experience into play. ",
  },
];

export const cols = {
  [crypto.randomUUID()]: {
    name: "To Do",
    items: itemsForCol,
  },
  [crypto.randomUUID()]: {
    name: "On Progress",
    items: [
      {
        id: crypto.randomUUID(),
        content: "Task 10",
        status: "Low",
        desc: "Brainstorming brings team members' diverse experience into play. ",
      },
      {
        id: crypto.randomUUID(),
        content: "Task 20",
        status: "High",
        desc: "Brainstorming brings team members' diverse experience into play. ",
      },
    ],
  },
  [crypto.randomUUID()]: {
    name: "Done",
    items: [
      {
        id: crypto.randomUUID(),
        content: "Task 6",
        status: "Completed",
        desc: "Brainstorming brings team members' diverse experience into play. ",
      },
      {
        id: crypto.randomUUID(),
        content: "Task 4",
        status: "Completed",
        desc: "Brainstorming brings team members' diverse experience into play. ",
      },
    ],
  },
};
