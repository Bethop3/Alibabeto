/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from 'react-router-dom';
import useAuth from '../../auth/hooks/useAuth';
import { Fragment } from 'react/jsx-runtime';

export const Private = ({ Component }: any) => {

    const { isAuthenticaded } = useAuth()

    if (!isAuthenticaded) return <Navigate to="/login" />
    return (
        <Fragment>
            PRIVATE ROUTE
            <Component />
        </Fragment>
    )

}
