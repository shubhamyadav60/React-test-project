import { RoutePaths } from "./RouterPaths";

import {
  DashboardContainer,
  Encrypt,
  Login,
  MultiStep,
} from "./RouterLazyImports";

const { LayoutPath, loginPath , MultiStepPath,EncryptPath} = RoutePaths;

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
];

export { publicRoutes, privateRoutes };
