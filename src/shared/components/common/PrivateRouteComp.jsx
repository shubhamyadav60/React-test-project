import {Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../../../shared/layout/components/Layout';


const PrivateRouteComp = ({ children }) => {
  const [state, setState] = useState('loading');
  const [isUserLogged,setIsUserLogged] = useState(false)

useEffect(() => {
  const checkUserLoggedIn = () => {
    const userToken = localStorage.getItem('userToken');
    const loggedIn = localStorage.getItem("isUserLogged") === "true";
    if (userToken && loggedIn) {
      setIsUserLogged(true);
      setState('loggedin');
    } else {
      setIsUserLogged(false);
      setState('redirect');
    }
  };
  checkUserLoggedIn();
}, []);

  if (state === 'loading') {
    return <div className="appLoader">Loading....</div>;
  }
  return isUserLogged ? <Layout children={children}/> : <Navigate to="/login" />;
};

export default PrivateRouteComp;
