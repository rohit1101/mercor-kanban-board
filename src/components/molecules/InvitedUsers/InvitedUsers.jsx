import React from "react";
import styles from "./InvitedUsers.module.css";
import Static from "../../../utils/static";
import First from "../../../assets/first.svg";
import Second from "../../../assets/second.svg";
import Third from "../../../assets/thir.svg";
import Last from "../../../assets/last.svg";

function InvitedUsers() {
  return (
    <div className={styles["invited__user-container"]}>
      {/* {Static.invitedUsers.map((image, idx) => ( */}
      <img
        className={`${styles["invited__user"]}`}
        src={First}
        alt="invited-user"
      />
      <img
        className={`${styles["invited__user"]} ${styles["invited__user-rel"]}`}
        src={Second}
        alt="invited-user"
      />
      <img
        className={`${styles["invited__user"]} ${styles["invited__user-rel-3"]}`}
        src={Third}
        alt="invited-user"
      />
      <img
        className={`${styles["invited__user"]} ${styles["invited__user-rel-4"]}`}
        src={Last}
        alt="invited-user"
      />
      {/* ))} */}

      <div className={styles["invited__user-last"]}>+2</div>
    </div>
  );
}

export default InvitedUsers;
