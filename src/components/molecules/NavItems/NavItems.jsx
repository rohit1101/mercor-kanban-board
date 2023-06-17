import React from "react";
import styles from "./NavItems.module.css";

function NavItems(props) {
  const { icon, text = "", alt = "" } = props;
  console.log(props.className, styles);
  return (
    <div className={`${styles["navitems"]} ${props.className}`}>
      <span>
        <img src={icon} alt={alt} />
      </span>
      {text}
    </div>
  );
}

export default NavItems;
