/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate } from 'react-router-dom';

export const Private = ({ Component }: any) => {
    const auth = true; //your logic

    return auth ? <Component /> : <Navigate to="/login" />
}
