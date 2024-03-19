import MainLayout from '../../layouts/MainLayout'
import ProductosGrid from '../../productos/components/ProductosGrid'
import { ProductosGridContainer } from '../../productos/styled'
import CuentaTotal from '../components/CuentaTotal'
import ListaProductos from '../components/ListaProductos'
import { CarritoContext } from '../context/CarritoContext'
import useCarrito from '../hooks/useCarrito'

const CarritoIndexPage = () => {

    const carrito = useCarrito()

    return (
        <MainLayout>

            <div className="px-6 md:px-0 min-h-[80vh]">

                <div className="my-8">
                    <h2 className="text-2xl font-bold">
                        Carrito de compras
                    </h2>

                    <section className="custom-grid-carrito rounded-lg mt-5 gap-4">

                        <CarritoContext.Provider value={carrito}>
                            <ListaProductos />
                            <CuentaTotal />
                        </CarritoContext.Provider >

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

                </div>

            </div>

        </MainLayout>
    )
}

export default CarritoIndexPage