import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Private } from "./components/PrivateRoute";
import { routes } from "./routes";
import NavBar from "../global/components/NavBar/NavBar";
import Footer from "../global/components/Footer";
// import MainLayout from "../layouts/MainLayout";
// import MainLayout from "../layouts/MainLayout";

const Router = () => {
    return (
        <>
            <NavBar />
            <>
                <BrowserRouter>
                    {/* <MainLayout> */}
                    <Routes>
                        {
                            routes.map(({ path, Component, _protected }) => (
                                <>
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
                                </>
                            ))
                        }
                    </Routes>
                    {/* </MainLayout> */}
                </BrowserRouter>
            </>
            <Footer />
        </>
    )
}

export default Router