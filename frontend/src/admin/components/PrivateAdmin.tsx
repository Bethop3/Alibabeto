/* eslint-disable @typescript-eslint/no-explicit-any */
import useAuth from '../../auth/hooks/useAuth'
import LayoutAdmin from '../layouts/LayoutAdmin'
import { Navigate } from 'react-router-dom'

const PrivateAdmin = ({ Component }: any) => {


    const { isAuthenticaded, usuario } = useAuth()

    if (!isAuthenticaded) return <Navigate to="/login" />


    if (usuario?.Rol.id !== 2) return <Navigate to={'/'} />

    return (
        <LayoutAdmin>
            {/* privado admin */}
            <Component />
        </LayoutAdmin>
    )
}

export default PrivateAdmin