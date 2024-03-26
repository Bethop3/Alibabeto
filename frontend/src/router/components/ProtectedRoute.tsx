import { Route, RouteProps } from 'react-router-dom';
import React from 'react';

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
