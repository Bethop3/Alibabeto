/* eslint-disable @typescript-eslint/no-explicit-any */
import LayoutAdmin from '../layouts/LayoutAdmin'
import { Navigate } from 'react-router-dom'

const PrivateAdmin = ({ Component }: any) => {

    const role = 1

    if (role !== 1) return <Navigate to={'/'} />

    return (
        <LayoutAdmin>
            {/* privado admin */}
            <Component />
        </LayoutAdmin>
    )
}

export default PrivateAdmin