import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error/>,
    children: [{ index: true, Component: Home }],
  },
]);
