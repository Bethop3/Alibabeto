// import useCarrito from '../hooks/useCarrito';
import { createContext } from 'react'
import useProductosAdmin from '../hooks/useProductosAdmin';

// import useCarrito from '../hooks/useCarrito';

type X = typeof useProductosAdmin

// type Opciones = {

// }

// type HCarrito = ReturnType<X> & Opciones;
type HCarrito = ReturnType<X>;

export const AdminProductosListadoContext = createContext<HCarrito | null>(null)

type Props = {
    children: React.ReactElement | React.ReactNode
}

export const AdminProductosListadoWrapper = ({ children }: Props) => {

    const productosAdmin = useProductosAdmin()

    return (
        <AdminProductosListadoContext.Provider value={{
            ...productosAdmin
        }}>
            {children}
        </AdminProductosListadoContext.Provider>
    )

}