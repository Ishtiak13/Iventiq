import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import EventDetails from "../components/eventDetails/EventDetails";
import Loading from "../components/ui/Loading";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/profile/Profile";
import CreateEvent from "../pages/createEvent/CreateEvent";
import About from "../pages/about/About";
import ForgetPass from "../pages/auth/ForgetPass";

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
        element: (
          <ProtectedRoute>
            <EventDetails />
          </ProtectedRoute>
        ),
        loader: () => fetch("/events.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/my-profile",
        element: (
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        )
      },
      {
        path:'/create-event',
        element: (
          <ProtectedRoute>
            <CreateEvent/>
          </ProtectedRoute>)
      }
      ,
      { path: "/about", Component: About },
      {
        path:'/auth/forget-password',
        Component:ForgetPass
      }
    ],
  },
]);
