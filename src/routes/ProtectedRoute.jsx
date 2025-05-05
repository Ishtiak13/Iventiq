import React, { use } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/ui/Loading";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = use(AuthContext);
  const location = useLocation();
  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate state={location.pathname} to={"/sign-in"} />;
  }
  return children;
};

export default ProtectedRoute;
