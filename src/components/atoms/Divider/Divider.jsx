import React from "react";
import styles from "./Divider.module.css";

function Divider(props) {
  return (
    <hr
      className={`${styles["divider"]} ${
        props.spacing && styles["divider__spacing"]
      }`}
    />
  );
}

export default Divider;
