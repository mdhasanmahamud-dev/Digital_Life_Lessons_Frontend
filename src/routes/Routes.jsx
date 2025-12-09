import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Authentication/Login/Login";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Upgrade from "../pages/Upgrade/Upgrade/Upgrade";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "/login",
        element : <Login/>
      },
      {
        path : "/register",
        element : <Register/>
      },
      {
        path : "/upgrade",
        element : <Upgrade/>
      }
    ]
  },
]);

export default router;
