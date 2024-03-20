import { CarritoContext } from '../context/CarritoContext'
import ListaProductos from './ListaProductos'
import CuentaTotal from './CuentaTotal'
import useCarrito from '../hooks/useCarrito'
import { ProductosGridContainer } from '../../productos/styled'
import ProductosGrid from '../../productos/components/ProductosGrid'
import { Fragment } from 'react/jsx-runtime'

const PaymentForm = () => {

    const carrito = useCarrito()

    return (
        <Fragment>
            <section className="custom-grid-carrito rounded-lg mt-5 gap-4">
                <CarritoContext.Provider value={carrito}>
                    <ListaProductos />
                    <CuentaTotal />
                </CarritoContext.Provider>
            </section>
            <hr className='mt-10' />

            <h2 className='mt-5 text-3xl font-bold mb-7'>Productos que también podrían interesarte...</h2>
            <ProductosGridContainer>
                <ProductosGrid
                    titulo=''
                    tipo="carrito"
                    productos={carrito.productosRelacionados}
                />
            </ProductosGridContainer>
        </Fragment>
    )
}

export default PaymentForm