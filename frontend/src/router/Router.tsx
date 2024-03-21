/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "../global/components/NavBar/NavBar";
import { Private } from "./components/PrivateRoute";
import Footer from "../global/components/Footer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from "react/jsx-runtime";
import useAuth from "../auth/hooks/useAuth";
import { routes } from "./routes";
import { useEffect } from "react";

const Router = () => {

    const { validateToken } = useAuth()

    useEffect(() => {

        validateToken()

    }, [])

    return (
        <>
            <NavBar />
            <Routes>
                {
                    routes.map(({ path, Component, _protected }) => (
                        <Fragment key={path}>
                            {
                                _protected
                                    ?
                                    <Route
                                        path={path}
                                        element={<Private Component={Component} />}
                                    />
                                    :
                                    <Route
                                        path={path}
                                        element={<Component />}
                                    />
                            }
                        </Fragment>
                    ))
                }
            </Routes>
            {/* </MainLayout> */}
            <ToastContainer />
            <Footer />
        </ >
    )
}

export default Router