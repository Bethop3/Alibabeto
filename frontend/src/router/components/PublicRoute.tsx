import { Fragment } from "react/jsx-runtime";
import NavBar from "../../global/components/NavBar/NavBar";
import Footer from "../../global/components/Footer";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
    Component: React.ComponentType<any>;
}

const PublicRoute = ({ Component }: Props) => {
    return (
        <Fragment>
            <NavBar />
            {/* PUBLIC */}
            <Component />
            <Footer />
        </Fragment>
    )
}

export default PublicRoute