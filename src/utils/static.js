/* refactor sidebar nav imports into one file in assets */
import Home from "../assets/home.svg";
import Messages from "../assets/message.svg";
import Tasks from "../assets/task-square.svg";
import Settings from "../assets/setting-2.svg";
import Members from "../assets/profile-2user.svg";

const Static = {
  sideBarNavItems: [
    { id: 1, icon: Home, title: "Home", alt: "home-icon" },
    { id: 2, icon: Messages, title: "Messages", alt: "messages-icon" },
    { id: 3, icon: Tasks, title: "Tasks", alt: "task-icon" },
    { id: 4, icon: Members, title: "Members", alt: "members-icon" },
    { id: 5, icon: Settings, title: "Settings", alt: "settings-icon" },
  ],
  sideBarProjects: [
    { id: 6, title: "Mobile App", status: "green" },
    { id: 7, title: "Website Redesign", status: "orange" },
    { id: 8, title: "Design System", status: "violet" },
    { id: 9, title: "Wireframes", status: "blue" },
  ],
};

export default Static;
