import MainLayout from '../../layouts/MainLayout'
import FiltradorBuscadorProductos from '../components/BuscadorProductos/FiltradorBuscadorProductos'
import Paginacion from '../components/BuscadorProductos/Paginacion'
import ProductoGridItem from '../components/ProductosGridItem'
import { BuscadorProductosContext } from '../context/BuscadorProductosContext'
import useBuscadorProductos from '../hooks/useBuscadorProductos'

const ProductosPage = () => {

    const response = useBuscadorProductos()

    const { productos, displayInfo } = response

    return (
        <MainLayout size='md'>
            <BuscadorProductosContext.Provider value={response}>
                <div className="p-10">

                    <FiltradorBuscadorProductos />

                    <section className="grid custom-grid item-grid gap-4">

                        <div>
                            {/* <h3> Cambiar </h3> */}

                            <article
                                className="block max-w-sm p-6 border border-gray-200 rounded-lg bg-blue-50/50"
                            >
                                <h5
                                    className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"
                                >
                                    Categorias
                                </h5>
                                <hr className="mb-3" />
                                <ul>
                                    <li className="mb-1">
                                        <a href=""> Camisas</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href=""> Telefonos Y Celulares</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href=""> Laptops</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href=""> Laptops</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href=""> Laptops</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href=""> Laptops</a>
                                    </li>
                                    <li className="mb-1">
                                        <a href=""> Laptops</a>
                                    </li>

                                </ul>

                            </article>

                        </div>

                        <div>
                            <article
                                className={`
                                    grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ${displayInfo.display === 'grid' ? 'xl:grid-cols-4' : 'xl:grid-cols-1'} gap-5 item-grid p- bg-white  border-gray-200 rounded-lg
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

                </div>
            </BuscadorProductosContext.Provider>
        </MainLayout>
    )
}

export default ProductosPage