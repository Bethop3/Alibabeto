import MainLayout from '../../layouts/MainLayout'
import DetalleProductoFicha from '../components/DetalleProducto/DetalleProductoFicha'
import useProductiPorId from '../hooks/useProductoPorId'

const DetalleProductoPorId = () => {

    const { producto } = useProductiPorId()
    return (
        <MainLayout>
            <main className="my-8">
                <div className="container mx-auto px-6">
                    <div className="md:items-center grid-ficha-producto grid">
                        <DetalleProductoFicha
                            {...producto!}
                        // {...responseData}
                        />
                    </div>
                    {/* <div style="margin-bottom: 50px;"></div> */}
                    <h3 className="text-gray-600 text-2xl font-medium">
                        Algo mas que te podria interesar...
                    </h3>

                    <div
                        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
                    >
                        {/* {
                            productosFiltrados.slice(0, 4).map((producto: Producto) => (
                                <div className="mb-4">
                                    <Sugerencias {...producto} />
                                </div>
                            ))
                        } */}
                    </div>
                </div>
            </main>
        </MainLayout >
    )
}

export default DetalleProductoPorId