import { useEffect } from "react";

const UseLogoutOnTabChange = () => {
    useEffect(() => {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          localStorage.clear();
          window.location.href = '/login';
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);
  };
  

  export default UseLogoutOnTabChange