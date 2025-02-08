import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
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
    <div className="flex">
      <Sidebar user={user} expanded={expanded} setExpanded={setExpanded} />
      <div
        className={`flex-1 transition-all duration-300 ${
          expanded ? "ml-64" : "ml-16"
        }`}
      >
        <header
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
          style={{ marginLeft: expanded ? "16rem" : "4rem" }}
        >
          <Header />
        </header>
        <main className="pt-20 p-6" style={{paddingLeft:"16rem"}}>
         {children}
        </main>
      </div>
    </div>
  );
}
