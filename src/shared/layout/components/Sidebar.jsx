import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { useState } from "react";
import LogoutIcon from "../../../assets/images/logout.svg";
import toast from "react-hot-toast";
import { APP_MESSAGES } from "../../../shared/constant/app-messages";
import { useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../../shared/constant/app-routes";
import { APP_ENUMS } from "../../../shared/constant/app-enum";


export default function Sidebar({ user, expanded, setExpanded }) {
  const [active, setActive] = useState(APP_ENUMS.DASHBOARD);
  const userDetails = localStorage.getItem("userDetails")
  const getUserData = JSON.parse(userDetails)
  const navigate = useNavigate();
  const logoutMessage = () => {
    localStorage.clear();
    
    toast.success(APP_MESSAGES.SUCCESS_WHILE_LOGOUT);
    
    navigate(APP_ROUTE.LOGIN);
    
  };
 
  return (
    <div className="relative">
      {expanded && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 sm:hidden"
          onClick={() => setExpanded(false)}
        ></div>
      )}
      <aside
        className={`
          fixed left-0 top-0 h-screen bg-white shadow-lg transition-all z-[999]
          ${expanded ? "w-64" : "w-16"}
          sm:${expanded ? "w-64" : "w-20"}
        `}
      >
        <div className="flex h-full flex-col border-r bg-white">
          <div className="flex items-start gap-[3.75rem] justify-between p-4 pt-10 relative z-[1000]">
           
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`rounded-full bg-[#FFFFFF] p-2 hover:bg-[#F0F4F8] border border-[#F0F4F8] transition-all z-[1000]
                 ${!expanded ? "ml-5 max-md:ml-4" : ""}`}
            >
              {expanded ? (
                <LuArrowLeftFromLine className="h-6 w-6 text-[#636B74]" />
              ) : (
                <LuArrowRightFromLine className="h-6 w-6 text-[#636B74]" />
              )}
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="flex-1 p-2" style={{padding:"0.8rem"}}>
              <li>
                <button
                  onClick={() => {
                    navigate('/')
                    setActive(APP_ENUMS.DASHBOARD)}}
                  className={`flex items-center w-full p-3 rounded-md text-[#32383E] font-semibold 
                                 ${active === APP_ENUMS.DASHBOARD ? "bg-[#DDE7EE]" : ""}`}
                >
                  <span
                    className={`ml-3 transition-all ${expanded ? APP_ENUMS.BLOCK : APP_ENUMS.HIDDEN}`}
                  >
                    Dashboard
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() =>{ setActive(APP_ENUMS.Encrypt)
                    navigate('/Encrypt')}
                  }
                  className={`flex items-center w-full p-3 rounded-md text-[#32383E] font-semibold 
                                  ${active === APP_ENUMS.Encrypt ? "bg-[#DDE7EE]" : ""}`}
                >
                  <span
                    className={`ml-3 transition-all ${expanded ? APP_ENUMS.BLOCK : APP_ENUMS.HIDDEN}`}
                  >
                    Encrypt & Decrypt
                  </span>
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    setActive(APP_ENUMS.MultiStep)
                    navigate('/multistep')
                  }}
                  className={`flex items-center w-full p-3 rounded-md text-[#32383E] font-semibold 
                                  ${active === APP_ENUMS.MultiStep ? "bg-[#DDE7EE]" : ""}`}
                >
                  <span
                    className={`ml-3 transition-all ${expanded ? APP_ENUMS.BLOCK : APP_ENUMS.HIDDEN}`}
                  >
                    MultiStep
                  </span>
                </button>
              </li>
             
            </ul>
          </div>
          <div>
           
            <div className="flex items-center border-t border-gray-200 space-x-4 p-3 mt-6">
              <div className="w-8 h-8 bg-white border border-[#CDD7E1] rounded-full flex items-center justify-center text-sm font-medium text-[#32383E]">
                SY
              </div>
              <div
                className={` ${expanded ? APP_ENUMS.BLOCK : APP_ENUMS.HIDDEN}`}
              >
                <p className="text-sm font-normal">
                 { getUserData?.email}
                </p>
              </div>
              <button
                onClick={logoutMessage}
                className="hover:opacity-80"
              >
                <img
                  src={LogoutIcon}
                  alt="logout"
                  className={`w-6 h-6 ml-12 ${expanded ? APP_ENUMS.BLOCK : APP_ENUMS.HIDDEN}`}
                  title="Logout"
                />
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
