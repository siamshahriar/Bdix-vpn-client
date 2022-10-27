import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-100 d-flex justify-content-center">
        <Spinner animation="grow" variant="secondary" />;
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
