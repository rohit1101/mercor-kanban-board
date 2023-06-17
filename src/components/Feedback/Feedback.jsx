import React from "react";
import styles from "./Feedback.module.css";
import Bulb from "../../assets/lamp-on.svg";

function Feedback() {
  return (
    <div className={styles["feedback"]}>
      <div className={styles["feedback__img-container"]}>
        <img src={Bulb} alt="lamp" className={styles["feedback__img"]} />
      </div>
      <p className={styles["feedback__title"]}>Thoughts Time</p>
      <p className={styles["feedback__description"]}>
        We don't have any notice for you, till then you can share your thoughts
        with your peers.
      </p>
      <button className={styles["feedback__cta"]}>Write a message</button>
    </div>
  );
}

export default Feedback;
