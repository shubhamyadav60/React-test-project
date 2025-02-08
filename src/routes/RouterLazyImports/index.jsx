import { lazy } from "react";
const Login = lazy(() => import("../../shared/components/auth/login/container/Login.container"));
const Layout = lazy(() => import("../../shared/layout/components/Layout"));
 const MultiStep = lazy(() => import("../../features/RegisterForm/RegisterForm"));
 const DashboardContainer  = lazy(() => import("../../features/dashboard/container/Dashboard.container"));
 const Encrypt  = lazy(() => import("../../features/EncryptDecryptComponent"));

export {
  Login,
  Layout,
  MultiStep,
  DashboardContainer,
  Encrypt,
};
