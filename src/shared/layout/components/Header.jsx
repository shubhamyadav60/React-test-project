import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setSidebarOpen, user, expanded }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.to = "/login";
  };

  return (
    <header className={`z-10 py-4 bg-white shadow-md dark:bg-gray-800 ${expanded ? "ml-[16rem]" : "ml-[5rem]"}`}>
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <button
          className="p-2 rounded-md md:hidden"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="relative flex-1 max-w-xl">
          <input
            className="w-full pl-8 pr-2 py-2 text-sm bg-gray-100 rounded-md dark:bg-gray-700"
            placeholder="Search projects..."
          />
          <svg
            className="absolute top-1/2 left-2 -translate-y-1/2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 11-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex items-center space-x-6">
          <button onClick={toggleTheme}>
            {darkMode ? "🌙" : "☀️"}
          </button>

          <div className="relative">
            <button onClick={() => setIsNotificationsOpen((prev) => !prev)}>
              🔔
            </button>
            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
                <ul className="p-2 space-y-2 text-sm">
                  <li>🔔 Notification 1</li>
                  <li>🔔 Notification 2</li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setIsProfileOpen((prev) => !prev)}>
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={user?.profilePic || "https://i.pinimg.com/236x/37/17/be/3717beaf7a1960ab5d5625523cb4604b.jpg"}
                alt="User"
              />
            </button>
            {isProfileOpen && (
              <ul className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md">
                <li><Link to="#">Profile</Link></li>
                <li><Link to="#">Settings</Link></li>
                <li><button onClick={handleLogout}>Log out</button></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
