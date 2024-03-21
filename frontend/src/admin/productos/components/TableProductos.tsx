import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import Paginacion from './Paginacion'
import { AdminProductosListadoContext } from '../context/AdminProductosListadoContext'

const TableProductos = () => {

    const { productos } = useContext(AdminProductosListadoContext)!

    return (
        <Fragment>
            <section className="gap-5 my-10">

                <div className='mt-10 mx-auto flex mb-10'>
                    <Paginacion />
                </div>

                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                <div className="flex items-center gap-x-3">

                                    <button className="flex items-center gap-x-2">
                                        <span className="font-bold">ID</span>
                                        <svg
                                            className="h-3"
                                            viewBox="0 0 10 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="0.1"
                                            />
                                            <path
                                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="0.1"
                                            />
                                            <path
                                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                                fill="currentColor"
                                                stroke="currentColor"
                                                strokeWidth="0.3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 font-bold w-[10%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Codigo
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Imagen
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm w-[30%] font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Descripcion
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Categoria
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Existencias
                            </th>
                            <th scope="col" className="text-left relative py-3.5 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {
                            productos.map(({ id, codigo, descripcion, existencias, imagen, CategoriaFK }) => (
                                <tr key={id}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <span>#{id}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <strong>{codigo}</strong>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <img src={imagen} className="w-20 " alt="" />
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <p className="w-[100%] whitespace-no-wrap whitespace-normal overflow-hidden">
                                            {descripcion}
                                        </p>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {CategoriaFK}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {existencias}
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <Link to={`/admin/producto/edit/${id}`} className="bg-yellow-300 py-2 px-6 font-bold text-black rounded-md transition-colors duration-200 focus:outline-none">
                                                Editar
                                            </Link>
                                            <a href={`/admin/pedidos/${id}`} className="bg-alibabeto-1 py-2 px-6 text-white rounded-lg transition-colors duration-200 focus:outline-none">
                                                Ver
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <Paginacion />

            </section>
        </Fragment>
    )
}

export default TableProductos