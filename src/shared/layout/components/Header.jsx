// import React from "react";
// import NotificationIcon from "../../../assets/images/notification.svg";


// const Header = () => {
//   return (
//     <nav className="bg-white shadow-md p-2 sm:p-4">
//       <div className="mx-auto flex items-center justify-end space-x-4 sm:space-x-6 pr-2 sm:pr-4">
//         <button
//           onClick={() => alert("Notification!")}
//           className="hover:opacity-80 transition"
//         >
//           <img
//             src={NotificationIcon}
//             alt="notification"
//             className="w-5 h-5 sm:w-6 sm:h-6"
//           />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger */}
        <button className="p-1 mr-5 -ml-1 rounded-md md:hidden" aria-label="Menu">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* Search input */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:bg-gray-700 dark:text-gray-200"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        {/* Icons Section */}
        <ul className="flex items-center space-x-6">
          {/* Theme toggler */}
          <li>
            <button className="rounded-md" onClick={toggleTheme} aria-label="Toggle color mode">
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </li>
          {/* Notifications */}
          <li className="relative">
            <button onClick={toggleNotifications} className="relative">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
              </svg>
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full"></span>
            </button>
          </li>
          {/* Profile menu */}
          <li className="relative">
            <button onClick={toggleProfile} className="rounded-full">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805"
                alt="User"
              />
            </button>
            {isProfileOpen && (
              <ul className="absolute right-0 w-56 mt-2 bg-white rounded-md shadow-md">
                <li><a href="#" className="block px-4 py-2">Profile</a></li>
                <li><a href="#" className="block px-4 py-2">Settings</a></li>
                <li><a href="#" className="block px-4 py-2">Log out</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
