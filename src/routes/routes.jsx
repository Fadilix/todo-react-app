import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage
  },
  {
    path: "/login",
    Component: LoginPage,
  },

  {
    path: "/register",
    Component: RegisterPage,
  },
]);
