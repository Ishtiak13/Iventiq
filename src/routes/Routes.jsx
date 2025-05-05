import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import EventDetails from "../components/eventDetails/EventDetails";
import Loading from "../components/ui/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "/sign-in", Component: SignIn },
      { path: "/sign-up", Component: SignUp },
      {
        path: "/event-details/:eventId",
        Component: EventDetails,
        loader: () => fetch("/events.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
