import React from "react";
import styles from "./Sidebar.module.css";
import Feedback from "../Feedback/Feedback";
import NavItems from "../../molecules/NavItems/NavItems";
import CompanyLogo from "../../../assets/company-logo.svg";
import Static from "../../../utils/static";
import Project from "../../../assets/add-square.svg";

function Sidebar() {
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__header"]}>
        <NavItems
          icon={CompanyLogo}
          alt="company-logo"
          text={<p className={styles["sidebar__heading"]}>Project M.</p>}
          className={styles["sidebar_heading-gap"]}
        />
      </div>
      <hr className={styles["sidebar__hr"]} />
      <div className={styles["sidebar__nav-items"]}>
        {Static.sideBarNavItems.map((navItem) => (
          <NavItems
            key={navItem.id}
            icon={navItem.icon}
            alt={navItem.alt}
            text={
              <p className={styles["sidebar__navitem-text"]}>{navItem.title}</p>
            }
            className={styles["sidebar_navitem"]}
          />
        ))}
      </div>
      <hr
        className={`${styles["sidebar__hr"]} ${styles["sidebar__hr-spacing"]}`}
      />
      <div className={styles["sidebar__projects"]}>
        <p>My projects</p>
        <span>
          <img src={Project} alt="projects-icon" />
        </span>
      </div>
      <Feedback />
    </div>
  );
}

export default Sidebar;
