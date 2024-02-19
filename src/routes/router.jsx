import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Homelayouts from "../Layouts/Homelayouts";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import ProfilePage from "../pages/ProfilePage";
import Notification from "../pages/Notification/Notification";
import Post from "../pages/Post/Post";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Homelayouts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/notification",
    element: <Notification />
  },{
    path: "/post/:postId",
    element: <Post />
  }
]);
