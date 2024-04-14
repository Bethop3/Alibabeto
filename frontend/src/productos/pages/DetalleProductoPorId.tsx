import MainLayout from '../../layouts/MainLayout'
import DetalleProductoFicha from '../components/DetalleProducto/DetalleProductoFicha'
import ProductosRelacionados from '../components/DetalleProducto/ProductosRelacionados'
import { DetalleProductoContext } from '../context/DetalleProductoContext'
import useProductoPorId from '../hooks/useProductoPorId'

const DetalleProductoPorId = () => {

    const result = useProductoPorId()

    return (
        <MainLayout>
            <DetalleProductoContext.Provider value={result}>
                <main className="my-8">
                    <div className="container mx-auto px-6">

                        <div className="md:items-center grid-ficha-producto grid">
                            <DetalleProductoFicha />
                        </div>

                        <h3 className="text-gray-900 text-2xl font-bold">
                            Algo mas que te podria interesar...
                        </h3>

                        <div
                            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
                        >
                            <ProductosRelacionados />
                        </div>
                    </div>
                </main>
            </DetalleProductoContext.Provider>
        </MainLayout >
    )
}

export default DetalleProductoPorId