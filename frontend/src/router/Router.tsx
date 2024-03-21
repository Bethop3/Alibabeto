/* eslint-disable react-hooks/exhaustive-deps */
import PrivateAdmin from "../admin/components/PrivateAdmin";
import { Private } from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from "react/jsx-runtime";
// import useAuth from "../auth/hooks/useAuth";
import { routes } from "./routes";
import { useEffect } from "react";

const Router = () => {

    // const { validateToken } = useAuth()

    useEffect(() => {

        // validateToken()

    }, [])

    return (
        <>
            <Routes>
                {
                    routes.map(({ path, Component, _protected, isAdmin }) => (
                        <Fragment key={path}>
                            {
                                _protected
                                    ?
                                    <Route
                                        path={path}
                                        element={<Private Component={Component} />}
                                    />
                                    :
                                    <>
                                        {
                                            isAdmin
                                                ?
                                                <Route
                                                    path={path}
                                                    element={<PrivateAdmin Component={Component} />}
                                                />
                                                :
                                                <Route
                                                    path={path}
                                                    element={<PublicRoute Component={Component} />}
                                                />
                                        }
                                    </>
                            }
                        </Fragment>
                    ))
                }
            </Routes>
            <ToastContainer />
        </>
    )
}

export default Router