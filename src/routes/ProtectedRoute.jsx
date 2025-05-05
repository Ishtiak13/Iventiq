import React, { use } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = use(AuthContext);
  const location = useLocation()

  if (!user) {
    return <Navigate state={location.pathname} to={"/sign-in"} />;
  }
  return children
};

export default ProtectedRoute;
