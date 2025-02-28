import { RoutePaths } from "./RouterPaths";

import {
  ApiResponse,
  DashboardContainer,
  Encrypt,
  Login,
  MultiStep,
} from "./RouterLazyImports";

const { LayoutPath, loginPath , MultiStepPath,EncryptPath,ApiResponsePath} = RoutePaths;

const publicRoutes = [
  {
    path: loginPath,
    component: Login,
  },
];

const privateRoutes = [
  {
    path: LayoutPath,
    component: DashboardContainer,
  },
  {
    path : MultiStepPath,
    component : MultiStep
  },
  {
    path : EncryptPath,
    component : Encrypt
  }
  ,
  {
    path : ApiResponsePath,
    component : ApiResponse
  }
];

export { publicRoutes, privateRoutes };
