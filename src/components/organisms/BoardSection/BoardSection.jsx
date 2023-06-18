import React from "react";
import styles from "./BoardSection.module.css";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "../../molecules/SortableItem/SortableItem";

function BoardSection({ id, items }) {
  const { setNodeRef } = useDroppable({ id });

  const droppableStyle = {
    padding: "20px 10px",
    border: "1px solid black",
    borderRadius: "5px",
    minWidth: 110,
  };

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} className={styles["boardsection"]}>
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </div>
    </SortableContext>
  );
}

export default BoardSection;
