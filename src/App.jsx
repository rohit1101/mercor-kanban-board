import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Layout from "./components/Layout/Layout";
import Topbar from "./components/organisms/Topbar/Topbar";
import styles from "./App.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { cols } from "./utils/array";

function App() {
  const [columns, setColumns] = useState(cols);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "sans-serif"],
      },
    });
  }, []);

  function handleDragEnd(e) {
    const { source, destination } = e;
    if (!destination) return;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      console.log("jo", source.droppableId);
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  }

  console.log(columns);

  return (
    <Layout>
      <Topbar />
      <div className={styles["app__container"]}>
        <p>Content header</p>
        <p>Filters and Share</p>
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className={styles["app__board-container"]}>
            {Object.entries(columns).map(([id, colItem]) => {
              return (
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={styles["app__board__boardsection"]}
                    >
                      {colItem.items?.map((item, index) => (
                        <Draggable
                          key={index}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  userSelect: "none",
                                  padding: 16,
                                  margin: "0 0 8px 0",
                                  minHeight: "50px",
                                  backgroundColor: snapshot.isDragging
                                    ? "#263B4A"
                                    : "#456C86",
                                  color: "white",
                                  ...provided.draggableProps.style,
                                }}
                              >
                                {item.content}
                              </div>
                            );
                          }}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </Layout>
  );
}

export default App;
