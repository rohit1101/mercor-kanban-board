import React from "react";

function Badge(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default Badge;
