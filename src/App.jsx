import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import Layout from "./components/Layout/Layout";
import Topbar from "./components/organisms/Topbar/Topbar";
import BoardSection from "./components/organisms/BoardSection/BoardSection";
import styles from "./App.module.css";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { arrayMove, insertAtIndex, removeAtIndex } from "./utils/array";

function App() {
  const [boardItems, setBoardItems] = useState({
    todo: ["1", "2", "3"],
    inProgress: ["4", "5", "6"],
    done: ["7", "8", "9"],
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "sans-serif"],
      },
    });
  }, []);

  function handleDragOver({ over, active }) {
    const overId = over?.id;
    console.log("sdsd", active.data.current);
    if (!overId) {
      return;
    }

    const activeContainer = active.data?.current?.sortable?.containerId;
    const overContainer = over.data?.current?.sortable?.containerId;

    if (!overContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      setBoardItems((items) => {
        const activeIndex = active.data.current?.sortable?.index;
        const overIndex = over.data.current?.sortable?.index || 0;

        return moveBetweenContainers(
          items,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  }

  function handleDragEnd({ active, over }) {
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const activeContainer = active.data.current?.sortable?.containerId;
      const overContainer = over.data.current?.sortable?.containerId || over.id;
      const activeIndex = active.data.current?.sortable?.index;
      const overIndex = over.data.current?.sortable?.index || 0;

      setBoardItems((items) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...items,
            [overContainer]: arrayMove(
              items[overContainer],
              activeIndex,
              overIndex
            ),
          };
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }

        return newItems;
      });
    }
  }

  function moveBetweenContainers(
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
  ) {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item),
    };
  }

  return (
    <Layout>
      <Topbar />
      <div className={styles["app__container"]}>
        <p>Content header</p>
        <p>Filters and Share</p>
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
        >
          <div className={styles["app__board-container"]}>
            {Object.keys(boardItems).map((group) => (
              <BoardSection id={group} items={boardItems[group]} key={group} />
            ))}
          </div>
        </DndContext>
      </div>
    </Layout>
  );
}

export default App;
