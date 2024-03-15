// ProtectedRoute.tsx

import React, { Fragment } from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';

// interface ProtectedRouteProps {
//     isAuthenticated: boolean;
//     component: React.ComponentType<any>;
// }

const ProtectedRoute: React.FC<RouteProps> = ({
    Component,
    path,
    // isAuthenticated,
    ...rest
}) => {

    // if (!isAuthenticated) return <Navigate to="/login" />

    return (
        <Route path={path} {...rest} Component={Component} />
    );
};

export default ProtectedRoute;
