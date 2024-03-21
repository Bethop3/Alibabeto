/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from 'react-router-dom';
import useAuth from '../../auth/hooks/useAuth';

export const Private = ({ Component }: any) => {

    const { isAuthenticaded } = useAuth()

    return isAuthenticaded ? <Component /> : <Navigate to="/login" />

}
