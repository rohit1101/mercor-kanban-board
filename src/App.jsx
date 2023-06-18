import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Layout from "./components/Layout/Layout";
import Topbar from "./components/organisms/Topbar/Topbar";
import styles from "./App.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Pencil from "./assets/arrow-square-up.svg";
import Link from "./assets/link.svg";
import Invite from "./assets/add-square-invite.svg";
import Down from "./assets/arrow-down.svg";
import Filter from "./assets/filter.svg";
import Dates from "./assets/date.svg";
import People from "./assets/people.svg";

import { cols } from "./utils/array";
import NavItems from "./components/molecules/NavItems/NavItems";
import InvitedUsers from "./components/molecules/InvitedUsers/InvitedUsers";

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
    }
  }

  return (
    <Layout>
      <Topbar />
      <div className={styles["app__container"]}>
        <div className={styles["app__container-title"]}>
          <div className={styles["app__container-left"]}>
            <p className={styles["app__container-head"]}>Mobile App</p>
            <NavItems
              icon={Pencil}
              alt="pencil-icon"
              className={styles["padding-right"]}
            />
            <NavItems icon={Link} alt="link-icon" />
          </div>
          <div className={styles["app__container-right"]}>
            <NavItems
              icon={Invite}
              alt="invite-icon"
              text={<p className={styles["app__invite-text"]}>Invite</p>}
              className={styles["app__invite-text-wrapper"]}
            />
            <InvitedUsers />
          </div>
        </div>
        <div className={styles["app__filter"]}>
          <div className={styles["app__filter-left"]}>
            <NavItems
              border
              icon={Filter}
              text={
                <p className={styles["app__filter-text"]}>
                  Filter
                  <span>
                    <img src={Down} alt="down" />
                  </span>
                </p>
              }
              className={styles["filter-gap"]}
            />
            <NavItems
              border
              icon={Dates}
              text={
                <p className={styles["app__filter-text"]}>
                  Today
                  <span>
                    <img src={Down} alt="down" />
                  </span>
                </p>
              }
              className={styles["filter-gap"]}
            />
          </div>

          <NavItems
            borderSm
            icon={People}
            text={<p className={styles["app__filter-text"]}>Share</p>}
            className={styles["filter-gap"]}
          />
        </div>

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
                                  borderRadius: 16,
                                  margin: "10px 0px",
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
