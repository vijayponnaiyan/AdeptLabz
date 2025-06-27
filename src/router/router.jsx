import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/units/MainLayout";
import Users from "../pages/Users";
import Overview from "../pages/Overview";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import Card from "../pages/card/Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Overview /> },
      { path: "home", element: <Home /> },
      { path: "card", element: <Card /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
