import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home.jsx";
import Admin from "../pages/Admin/Admin.jsx";

export const router = createBrowserRouter(
  [
    { path: "/", Component: Home },
    { path: "/admin", Component: Admin }
  ]
)