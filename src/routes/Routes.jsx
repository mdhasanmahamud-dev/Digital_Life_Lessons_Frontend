import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Authentication/Login/Login";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Authentication/Register/Register";
import Upgrade from "../pages/Upgrade/Upgrade/Upgrade";
import PublicLessons from "../pages/PublicLessons/PublicLessons/PublicLessons";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../dashboard/Dashboard/DashboardHome";
import AddLesson from "../pages/AddLesson/AddLesson/AddLesson";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/upgrade",
        element: <Upgrade />,
      },
      {
        path: "/public-lession",
        element: <PublicLessons />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-lesson",
        element: (
          <PrivateRoute>
            <AddLesson />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
