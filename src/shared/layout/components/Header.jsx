import React from "react";
import NotificationIcon from "../../../assets/images/notification.svg";


const Header = () => {
  return (
    <nav className="bg-white shadow-md p-2 sm:p-4">
      <div className="mx-auto flex items-center justify-end space-x-4 sm:space-x-6 pr-2 sm:pr-4">
        <button
          onClick={() => alert("Notification!")}
          className="hover:opacity-80 transition"
        >
          <img
            src={NotificationIcon}
            alt="notification"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
