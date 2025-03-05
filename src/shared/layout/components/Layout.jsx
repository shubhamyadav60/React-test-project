import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [expanded, setExpanded] = useState(window.innerWidth >= 1024);
  const user = { name: "Jane Doe" };

  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      {/* Sidebar */}
      <Sidebar user={user} expanded={expanded} setExpanded={setExpanded} />

      {/* Main content area (fixed height) */}
      <div className="flex-1 flex flex-col h-full">
        {/* Fixed Header */}
        <div className="h-16">
          <Header expanded={expanded} setExpanded={setExpanded} />
        </div>

        {/* Page content (fills remaining space after header) */}
        <main
          className={`flex-1 transition-all duration-300 ${
            expanded ? "ml-64" : "ml-16"
          }`}
        >
          <div className={`h-full  mx-auto flex items-center justify-center ${expanded ? "ml-34" : "ml-[1rem]"}`}>
            {/* Centered Card (optional) */}
            <div className="bg-white/90 relative w-full max-h-[100vh] overflow-hidden">
              <div className="relative z-10 h-[calc(100vh-70px)] overflow-y-auto">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
