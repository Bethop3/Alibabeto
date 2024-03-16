import NavBar from "../global/components/NavBar/NavBar";
import { Private } from "./components/PrivateRoute";
import Footer from "../global/components/Footer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from "react/jsx-runtime";
import { routes } from "./routes";

const Router = () => {

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