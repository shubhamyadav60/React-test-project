import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import DashboardIcon from "../../../assets/images/dashboard.svg";
import toast from "react-hot-toast";
import { APP_MESSAGES } from "../../../shared/constant/app-messages";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../../shared/constant/app-routes";
import { APP_ENUMS } from "../../../shared/constant/app-enum";

export default function Sidebar({ expanded, setExpanded }) {
  const [active, setActive] = useState(APP_ENUMS.DASHBOARD);
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
  const navigate = useNavigate();

  const logoutMessage = () => {
    localStorage.clear();
    toast.success(APP_MESSAGES.SUCCESS_WHILE_LOGOUT);
    navigate(APP_ROUTE.LOGIN);
  };

  const menuItems = [
    {
      key: APP_ENUMS.DASHBOARD,
      label: "Dashboard",
      icon: DashboardIcon,
      route: "/"
    },
    {
      key: APP_ENUMS.Encrypt,
      label: "Encrypt & Decrypt",
      icon: null,
      route: "/Encrypt"
    },
    {
      key: APP_ENUMS.MultiStep,
      label: "MultiStep",
      icon: null,
      route: "/multistep"
    },
    {
      key: APP_ENUMS.APIRESPONSE,
      label: "API Response",
      icon: null,
      route: "/apiresponse"
    }
  ];

  return (
    <div className="relative">
      {expanded && (
        <div
          className="fixed inset-0 z-10 bg-black/50 sm:hidden"
          onClick={() => setExpanded(false)}
        ></div>
      )}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] shadow-lg transition-all duration-300 z-50
        ${expanded ? "w-64" : "w-20"}`}
      >
        <div className="flex h-full flex-col">
          {/* Header with Toggle */}
          <div className="flex items-center justify-between p-4">
            <h2
              className={`text-lg font-semibold text-gray-800 transition-all ${
                expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              Dashboard
            </h2>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="p-2 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-100 transition"
            >
              {expanded ? (
                <LuArrowLeftFromLine className="w-5 h-5 text-gray-600" />
              ) : (
                <LuArrowRightFromLine className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 space-y-2 p-4">
            {menuItems.map(({ key, label, icon, route }) => (
              <li key={key}>
                <button
                  onClick={() => {
                    setActive(key);
                    navigate(route);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition ${
                    active === key ? "bg-blue-100 text-blue-600 font-semibold" : ""
                  }`}
                >
                  {icon ? (
                    <img src={icon} alt={label} className="w-6 h-6" />
                  ) : (
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-600 font-bold rounded-md">
                      {label.charAt(0)}
                    </span>
                  )}
                  <span
                    className={`transition-all ${expanded ? "block" : "hidden"}`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Footer (User + Logout) */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
                <img src={userDetails?.profilePic || "https://i.pinimg.com/236x/37/17/be/3717beaf7a1960ab5d5625523cb4604b.jpg"} alt="User" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className={`flex-1 transition-all ${expanded ? "block" : "hidden"}`}>
                <p className="text-sm font-medium text-gray-700">
                  {userDetails?.email || "User"}
                </p>
              </div>
              <button
                onClick={logoutMessage}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="Logout"
              >
                <FiLogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
