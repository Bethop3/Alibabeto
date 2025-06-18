/* eslint-disable @typescript-eslint/no-explicit-any */
import usePedidoPorId from "../hooks/usePedidoPorId";

const AdminViewPedidoPage = () => {



    const { pedido, register, handleChangeStatus, progreso } = usePedidoPorId();

    return (
        <div className="container mx-auto my-10 min-h-[100vh]">
            {/* component */}
            {/* This is an example component */}
            <div className="mx-auto grid grid-cols-2 gap-10">
                <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Productos
                        </h3>
                    </div>
                    <div className="flow-root">
                        <ul
                            role="list"
                            className="divide-y divide-gray-200 dark:divide-gray-700"
                        >
                            {pedido?.pedido_has_productos.map((producto_producto) => (
                                <li key={pedido.id} className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-16 h-16 rounded object-contain"
                                                src={producto_producto.producto.imagen}
                                                alt={producto_producto.producto.descripcion}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {producto_producto.producto.titulo}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {producto_producto.producto.descripcion}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            ${producto_producto.producto.precio}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <article>

                    <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h3 className="text-xl mb-3 font-bold leading-none text-gray-900 dark:text-white">
                            Estado del pedido
                        </h3>
                        <div style={{ display: "flex" }}>
                            <div
                                style={{ flex: 1, textAlign: "center", border: "1px solid transparent", padding: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"></path>
                                </svg>
                                Pendiente
                            </div>
                            <div style={{ flex: 1, textAlign: "center", border: "1px solid transparent", padding: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA20lEQVR4nO2YsQ3CMBREr2ICJHYhrAEbQWAVKiagIKskSIghjsZFqvhjyXCBe9JvrG/ZT+ffGDDGGCPCFQDFq4uIcCaVJdz4JWiRf0tkAeAE4B543wOANu2REzkWDOxBUWRI+9aB3maUjKxIE+jdpN5eUaQteFp71WFvR8lMVZ8kJIf9U9AiYtCJiEEnIgadiBh0IhXZAdi+sS6ZyBLAA8ATwCqwLityHp11CazLikydxYk7WKQmP5NICVQTKf0apUXEoFoipdAic0+E4pWlE7gkM3XLaxhjjEF9Xj3Eigti5M+NAAAAAElFTkSuQmCC" />

                                Preparando
                            </div>
                            <div style={{ flex: 1, textAlign: "center", border: "1px solid transparent", padding: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrElEQVR4nO2Yu2tUQRTGfz6SjeBmVUR0g4J22mhlo2gngviKIOnFwke0FkTSpVALtZMUWqhgIdjpH+ATfICPaOsSxQdaaFQM8crAd+Wy7M7O3Ht3EnE+OLDcOXO+++2ZPXPOQkRERERERDFUgTHgC5AEsI/ABWABJWMskIBmO1+2kM8KvJ4w2Ca+D2UHTmQh0RXOJAr5TzJSBxaH5Ey6EHQp8BJ4BqywcL5zqG7vgevAutBCFgIPFNOIWWLh9LFJYE8oIb3ALcV7A6zqwDnk8D5rgJt69hPY0m0hc4GrivUJWGvxtXEmLdbmAZf1/C2wzDeowQBQ66yDc4rzFdjYwddXiEEPcFdrt/XFOQftB54Czy3HxOCkYvwCtlv8XDgTy9pKZdusn/DZOKDKY9YngA0tfA4Cv4FpYL+DiCJCDHaKbwrYjMfGqlKZHpsdmbVdCmjWjuOOIkIMzsqnoVLvvLECXJOfefEDwFbgh56dwg9FhfQA9+V3yWejwRzgdMb/e4F2vKgQg9W6W6bTI+9bfo9ps9lzpVX1CCTE4Ix8L+a9R/YBN5TiPLBxNiyXZTM2yfd1p6Ddgo1zJEf7MjUbhcyXmDQzrjbrhPgiCikDMSNFj1afWpCHuoQmNTwN69b3hY2zz5PLWUhdHXC7avGkzTibR0g9B5eTkEom8Atgt5rIqsbOca091nRYREheLichw5nZu9VwVcsQHC4oJC/X31gT+mCu+2akE5n5dtphr3zuFBSSh2so084z6nBrmvRimSJ9W4qyuUbQeRvNZMY3eC2gkFqTb0MiTFtjRZpu2/9JgzmOVnCuo9o43uYHuEgttPE55Bs8JFevarfZ/Eo/tn7ZYCbwI8/yOyNc9QxBKzN1fXlBEcG4Kkq9Gfi/ye4BR0rIxExyRURE8I/hD92u8j8lIA9AAAAAAElFTkSuQmCC" />
                                Enviado
                            </div>
                            <div style={{ flex: 1, textAlign: "center", border: "1px solid transparent", padding: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtElEQVR4nO1ZbWhXVRj/7b/csjEFcbpBX0pTY4lMBpIvfdlYLxRufihh4QaGL1B+iIl+y0zBqd9XMYJGH0JIDeqTIJVa+AIihS2lQEud2AvhrL3kbjzxO/F0du65597//f/ZYj84cM85z/Oc53fvOc8557lAadEB4BsWeZ52WAXgcwCRVc4CeArTAEsBHFWODwHYzjKk2o9SdsphPoADAEbp6DDrc5RMDYBdAH6nzDiAdwA0YAqgJoNzIaTLhgcAbAFwS02XEwCWp7CxBMARABPUv8OXUoUyoQ3AoCJwBsCaIuytoQ1jb5BjlBzDatDXcrQrtozduygDdDgd5nSoLMJeBaepWWemZMLzAM7TsXMAnvPImoGOWdOrMcO4jda0OhZAJNbXZ9SCM2WCCj4ighcAXGd9jNGnOoDALH7JEepK0NjksG/D6+uXbNjFcLpbveUkIoK5APrUAN8CWOchsY4yxok+2oizr+H1dYwVE/aq1BsOIWKwFsBl5eDbloNz2WYIX6ZOqP1EX12KPmO+PplWe9RmdwPABpYbbBulTNwUjFKO/W9bnkQMHgNw0nFoDAkK0VQiIijwsGjkt7MN041IKeSjGSL/5y8yyr79Ocx5DbG1X0W2khPZynuH9H8MoDYHIrW0FdH2lnIQMbvzbcp8l3BtTbK1CMDXlPkFQGtKW0FELgD4AMBqh9FHLQdaMhBpoW7ETMsih8xa+nAhLZFXHBuZfO6umClxXMnsSEFkR8AU7VIyumxOIvIQLzVSfwNAE4CDrN8H0B2zSN9SZ6h+6/hhE6mmTESdfTFBo5tjilwvfdnDutxdZvuIPMnnryyjOxPICF4EcI9ypwEsdBBZyL6Isi/F2OpWJGRsjbNsX+Uj0qTmayEDGdG/Rjm5p6xU9lequ8t1yiaR6LH6CuqEvcIm8hcfKnnhMZmRQ45BQsgsAHBKvXUzkOtrpSEB+iR9N+lrJevCAT+zMk/dwsbU3MxCRu4J7zoWab8n3ZNEopd94tvTbJvHNuGAq6zovaBd7eAuMj0BZASvMurERbS0JEbpm8Eytl+RyoesbLOU8yLT5FkPxZCAuiYIh38ih1R+AlCH7GQ6kR6dRZCoo8+RiX4F9QvgPC/1WciMxJwAfBnGkYwkauir9H+mI2y9WisfMWmWhozZNIeYpE5CnTqr9aYkUUEfI/o8KQLKYv+VAnsdxjUZyV9pyBv5lH1CKgmHKfuJY7864CEB+ib9v/kOq22MMBMxu+56RcYeZCl17znWmr3P/EFZSVJodCgSMpaNjfRtPCTRbZLJMlizo1+yel/EZEOOUPdlj/1NOtJYaKRtV5azmT5FCaH8P+hTO+jDoUq8EIneex6Z9x0n2CQ0APgxwPYkzGI0iHhIezBQbzl1LnpkLlHmiUCbs5msNhFKfEsFiT7f08BAoE69OhTGwbzZuPOWjQHK/xAYEZ14XP23eD1Avlqtrzj8SZmQrH0PZe+m/K3nRDt3XzlhPhsgH3cjDO03aFURVO46ueBNDi77zOIyEHmEP0cj3gpzQ0H9TZKFV2oi5yhzPDB3lgq1gU7kQSRiScqZZUa5iZQMM0QUZr5InpDsiBzqipHJw8Yk/A1Br6BvF+HWcAAAAABJRU5ErkJggg==" />

                                Entregado
                            </div>
                        </div>

                        <div className="progress-bar" style={{ position: 'relative', height: '10px' }}>
                            <div className="progress" style={{ height: '100%', position: 'relative' }}>
                                <div className="progress-bar-inner" style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: `${100}%`,
                                    backgroundColor: '#e0e0e0',
                                    height: '100%',
                                    transition: 'width 1s ease-in-out',
                                }}></div>
                                <div className="progress-bar-inner" style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: `${progreso}%`,
                                    backgroundColor: '#6abf69',
                                    height: '100%',
                                    transition: 'width 1s ease-in-out',
                                    zIndex: 1,
                                }}></div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <label
                                htmlFor="company"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                Estado
                            </label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                {
                                ...register("estado_pedido")
                                }
                                onChange={handleChangeStatus}
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="1">Pendiente</option>
                                <option value="2">Preparando</option>
                                <option value="3">Enviado</option>
                                <option value="4">Entregado</option>
                            </select>
                        </div>
                    </div>

                </article>
            </div>
        </div>
    )
}

export default AdminViewPedidoPage