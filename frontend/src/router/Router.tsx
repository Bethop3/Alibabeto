import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Private } from "./components/PrivateRoute";
import { routes } from "./routes";
import NavBar from "../global/components/NavBar";

const Router = () => {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    {
                        routes.map(route => (
                            <>
                                {
                                    route.protected
                                        ?
                                        <Route
                                            path={route.path}
                                            element={<Private Component={route.Component} />}
                                        />
                                        :
                                        <route.Component></route.Component>
                                }
                            </>
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router