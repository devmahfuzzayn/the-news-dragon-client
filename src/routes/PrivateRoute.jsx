import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("user in private route", user);

    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

/**
 * ----------------------
 *          STEPS
 * ----------------------
 * 1. Check user is logged in or not
 * 2. If user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. Setup the private/protected router
 * 5. Handle loading
 * */
