// import useCarrito from '../hooks/useCarrito';
import { createContext } from 'react'
import useUsuariosAdmin from '../hooks/useUsuariosAdmin';

// import useCarrito from '../hooks/useCarrito';

type X = typeof useUsuariosAdmin

// type Opciones = {

// }

// type HCarrito = ReturnType<X> & Opciones;
type HCarrito = ReturnType<X>;

export const AdminUsuariosListadoContext = createContext<HCarrito | null>(null)

type Props = {
    children: React.ReactElement | React.ReactNode
}

export const AdminUsuarioListadoWrapper = ({ children }: Props) => {

    const productosAdmin = useUsuariosAdmin()

    return (
        <AdminUsuariosListadoContext.Provider value={{
            ...productosAdmin
        }}>
            {children}
        </AdminUsuariosListadoContext.Provider>
    )

}