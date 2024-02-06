import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Homelayouts from "../Layouts/Homelayouts";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },{
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <Homelayouts />,
    errorElement: <ErrorPage />,
  },
]);
