import { Route, Routes } from "react-router-dom";
import PrivateRouteComp from "../../shared/components/common/PrivateRouteComp";
import PageNotFound from "../../shared/components/common/PageNotFound";
import { privateRoutes, publicRoutes } from "..";

const RouterManager = () => {
  return (
    <>
      <Routes>
      {privateRoutes?.map((route, index) => (
        <Route
          key={index}
          path={route?.path}
          element={
            <PrivateRouteComp>
              <route.component />
            </PrivateRouteComp>
          }
        />
      ))}
        
        {publicRoutes?.map((route, index) => (
          <Route
            path={route?.path}
            element={<route.component />}
            key={index}
          />
        ))}
         <Route path= '*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RouterManager;
