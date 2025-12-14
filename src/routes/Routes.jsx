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
import Profile from "../pages/Profile/Profile";
import MyLessons from "../pages/MyLessons/MyLessons/MyLessons";
import EditLessons from "../pages/MyLessons/EditLessons/EditLessons";
import Favorites from "../pages/Favorites/Favorites/Favorites";
import LessonDetails from "../pages/LessonDetails/LessonDetails/LessonDetails";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound/>,
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
      {
        path: "/payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        ),
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
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-lession",
        element: (
          <PrivateRoute>
            <MyLessons />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-lession/:id",
        element: (
          <PrivateRoute>
            <EditLessons />
          </PrivateRoute>
        ),
      },
      {
        path: "lession-details/:id",
        element: (
          <PrivateRoute>
            <LessonDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "favorite-lession",
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
