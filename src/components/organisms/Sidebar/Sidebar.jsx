import React from "react";
import styles from "./Sidebar.module.css";
import Feedback from "../Feedback/Feedback";
import NavItems from "../../molecules/NavItems/NavItems";
import CompanyLogo from "../../../assets/company-logo.svg";
import Static from "../../../utils/static";
import Project from "../../../assets/add-square.svg";
import Divider from "../../atoms/Divider/Divider";

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
      <Divider />
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
      <Divider spacing />
      <div className={styles["sidebar__projects"]}>
        <div className={styles["sidebar__projects-heading"]}>
          <p>My projects</p>
          <span>
            <img src={Project} alt="projects-icon" />
          </span>
        </div>

        {Static.sideBarProjects.map((project) => (
          <div key={project.id} className={styles["sidebar__project"]}>
            <div className={styles["sidebar__project-left"]}>
              <div
                className={`${styles["sidebar__projects_status"]} ${
                  styles[`sidebar__projects_status--${project.status}`]
                }`}
              />
              <p>{project.title}</p>
            </div>
            <p className={styles["sidebar__project-right"]}>. . .</p>
          </div>
        ))}
      </div>
      <div className={styles["sidebar__feedback"]}>
        <Feedback />
      </div>
    </div>
  );
}

export default Sidebar;
