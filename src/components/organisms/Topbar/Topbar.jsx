import React from "react";
import styles from "./Topbar.module.css";
import Divider from "../../atoms/Divider/Divider";
import Static from "../../../utils/static";
import NavItems from "../../molecules/NavItems/NavItems";
import ArrowDown from "../../../assets/arrow-down.svg";
import Profile from "../../../assets/profile.svg";

function Topbar() {
  return (
    <>
      <div className={styles["topbar"]}>
        <input
          type="text"
          placeholder="Search for anything..."
          className={styles["topbar__inp"]}
        />
        <div className={styles["topbar__ctas"]}>
          <div className={styles["topbar__ctas-items"]}>
            {Static.topBarNavItems.map((topItem) => (
              <NavItems
                key={topItem.id}
                icon={topItem.icon}
                alt={topItem.alt}
              />
            ))}
          </div>
          <div className={styles["topbar__profile"]}>
            <div className={styles["topbar__profile-name"]}>
              <p>Anima Agarwal</p>
              <p className={styles["topbar__profile-location"]}>U.P, India</p>
            </div>
            <div className={styles["topbar__profile-container"]}>
              <img
                src={Profile}
                alt="profile-pic"
                className={styles["topbar__profile-img"]}
              />
              <img src={ArrowDown} alt="arrow-down" />
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Topbar;
