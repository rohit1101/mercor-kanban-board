import React from "react";
import styles from "./NavItems.module.css";

function NavItems(props) {
  const { icon, text = "", alt = "icon" } = props;
  return (
    <div
      className={`${styles["navitems"]} ${
        props.border && styles["navitems--border"]
      } ${props.borderSm && styles["navitems--border-sm"]} ${props.className}`}
    >
      <span>
        <img src={icon} alt={alt} />
      </span>
      {text}
    </div>
  );
}

export default NavItems;
