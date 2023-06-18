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
import Todo from "./assets/todo-square.svg";
import Equal from "./assets/pause.svg";
import Menu from "./assets/menu.svg";

import { cols } from "./utils/array";
import NavItems from "./components/molecules/NavItems/NavItems";
import InvitedUsers from "./components/molecules/InvitedUsers/InvitedUsers";
import Badge from "./components/atoms/Badge/Badge";
import Static from "./utils/static";

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
                    <img src={Down} alt="down" width="14px" height="14px" />
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
          <div className={styles["app__filter-right"]}>
            <NavItems
              borderSm
              icon={People}
              text={<p className={styles["app__filter-text"]}>Share</p>}
              className={styles["filter-gap"]}
            />
            <div className={styles["vertical-line"]} />
            <div className={styles["app__filter-pause"]}>
              <img src={Equal} alt="equal-icon" />
            </div>
            <NavItems icon={Menu} alt="unknown-icon" />
          </div>
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
                      <div
                        key={id}
                        className={`${styles["appbar__project"]} ${
                          styles[
                            `appbar__project--${
                              colItem.name.includes("On")
                                ? "On"
                                : colItem.name.includes("To")
                                ? "To"
                                : colItem.name
                            }`
                          ]
                        }`}
                      >
                        <div className={styles["appbar__project-left"]}>
                          <div
                            className={`${styles["appbar__projects_status"]} ${
                              styles[
                                `appbar__projects_status--${
                                  colItem.name.includes("On")
                                    ? "On"
                                    : colItem.name.includes("To")
                                    ? "To"
                                    : colItem.name
                                }`
                              ]
                            }`}
                          />
                          <p>{colItem.name}</p>
                          <Badge className={styles["appbar__rounded-badge"]}>
                            {colItem.items.length}
                          </Badge>
                        </div>
                        {colItem.name === "To Do" && (
                          <NavItems alt="todo-icon" icon={Todo} />
                        )}
                      </div>
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
                                className={styles["app__card"]}
                              >
                                <div className={styles["app__card-header"]}>
                                  <Badge
                                    className={`${styles["app__card-badge"]} ${
                                      styles[`badge--${item.status}`]
                                    }`}
                                  >
                                    {item.status}
                                  </Badge>
                                  <p>. . .</p>
                                </div>

                                <p className={styles["app__card-title"]}>
                                  {item.content}
                                </p>
                                <p className={styles["app__card-desc"]}>
                                  {item.desc}
                                </p>
                                <div className={styles["app__card-footer"]}>
                                  <InvitedUsers
                                    className={styles["app__card-footer-users"]}
                                  />
                                  <div
                                    className={styles["app__card-footer-items"]}
                                  >
                                    {Static.cardNavItems.map((cardItem) => (
                                      <NavItems
                                        key={cardItem.id}
                                        icon={cardItem.icon}
                                        alt={cardItem.alt}
                                        text={<p>{cardItem.title}</p>}
                                        className={
                                          styles["app__card-footer-item-text"]
                                        }
                                      />
                                    ))}
                                  </div>
                                </div>
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
