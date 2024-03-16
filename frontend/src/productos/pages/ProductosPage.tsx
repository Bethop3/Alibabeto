import MainLayout from '../../layouts/MainLayout'
import Paginacion from '../components/BuscadorProductos/Paginacion'
import ProductoGridItem from '../components/ProductosGridItem'
import { BuscadorProductosContext } from '../context/BuscadorProductosContext'
import useBuscadorProductos from '../hooks/useBuscadorProductos'

const ProductosPage = () => {

    const response = useBuscadorProductos()

    const { productos } = response

    return (
        <MainLayout size='md'>
            <BuscadorProductosContext.Provider value={response}>
                <div className="p-10">
                    <div
                        className="w-full p-6 py-4 bg-blue-50/50 border border-gray-200 rounded-lg shado mb-5 flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <label className="font-bold mr-3">Categoria</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                                <label className="font-bold mr-3">Categoria</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button className="bg-alibabeto-1 p-2 rounded mr-1">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.1 4H5c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm-10 10H5c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Z" />
                                </svg>
                            </button>
                            <button className="bg-alibabeto-1 p-2 rounded">
                                <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0" />
                                </svg>
                            </button>
                        </div>
                    </div>
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
                                className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 item-grid p- bg-white  border-gray-200 rounded-lg shado"
                            >
                                {
                                    productos?.map((producto) => (
                                        <ProductoGridItem
                                            key={producto.id}
                                            producto={producto}
                                            tipo="secondary"
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