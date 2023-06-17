import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "../organisms/Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <Sidebar />
      <div className={styles["layout__child"]}>{children}</div>
    </div>
  );
}

export default Layout;
