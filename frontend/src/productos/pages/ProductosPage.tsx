import FiltradorBuscadorProductos from '../components/BuscadorProductos/FiltradorBuscadorProductos'
import BuscadorProductosSkeleton from '../components/skelleton/BuscadorProductosSkeleton'
import { BuscadorProductosContext } from '../context/BuscadorProductosContext'
import Paginacion from '../components/BuscadorProductos/Paginacion'
import useBuscadorProductos from '../hooks/useBuscadorProductos'
import ProductoGridItem from '../components/ProductosGridItem'
import MainLayout from '../../layouts/MainLayout'

const ProductosPage = () => {

    const response = useBuscadorProductos()

    const { productos, displayInfo, isLoading } = response

    return (
        <MainLayout size='lg'>
            <BuscadorProductosContext.Provider value={response}>

                <div className="my-5">

                    <FiltradorBuscadorProductos />

                    {
                        isLoading
                            ?
                            <BuscadorProductosSkeleton />
                            :
                            <section className="grid custom-grid item-grid gap-4">

                                <div>
                                    <article
                                        className={`
                                    grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 ${displayInfo.display === 'grid' ? 'xl:grid-cols-4' : 'xl:grid-cols-1'} gap-5 item-grid p- bg-white  border-gray-200 rounded-lg
                                `}
                                    >
                                        {
                                            productos?.map((producto) => (
                                                <ProductoGridItem
                                                    key={producto.id}
                                                    producto={producto}
                                                    tipo={displayInfo.display === 'grid' ? "secondary" : 'lista'}
                                                />
                                            ))
                                        }
                                    </article>

                                    <Paginacion />

                                </div>

                            </section>
                    }



                </div>
            </BuscadorProductosContext.Provider>
        </MainLayout>
    )
}

export default ProductosPage