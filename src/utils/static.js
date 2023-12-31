/* refactor sidebar nav imports into one file in assets */
import Home from "../assets/home.svg";
import Messages from "../assets/message.svg";
import Tasks from "../assets/task-square.svg";
import Settings from "../assets/setting-2.svg";
import Members from "../assets/profile-2user.svg";
import Calendar from "../assets/calendar-2.svg";
import MessageQuestion from "../assets/message-question.svg";
import Notification from "../assets/notification.svg";
import Comment from "../assets/card-comment.svg";
import Folder from "../assets/card-folder.svg";

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
  topBarNavItems: [
    { id: 10, icon: Calendar, title: "", alt: "calendar-icon" },
    { id: 11, icon: MessageQuestion, title: "", alt: "messages-question-icon" },
    { id: 12, icon: Notification, title: "", alt: "notification-icon" },
  ],
  cardNavItems: [
    {
      id: crypto.randomUUID(),
      icon: Comment,
      title: "14 comments",
      alt: "comments-icon",
    },
    {
      id: crypto.randomUUID(),
      icon: Folder,
      title: "15 files",
      alt: "files-icon",
    },
  ],
};

export default Static;
