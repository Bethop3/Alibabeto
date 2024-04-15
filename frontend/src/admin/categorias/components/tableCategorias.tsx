import { Fragment } from "react";
import { Link } from "react-router-dom";
import useCategorias from "../hooks/useCategorias";
import { AuthAxios } from "../../../global/api/AuthAxios";


const TableCategorias = () => {

    const objeto = useCategorias()

    const eliminarcategoria = async (id: number) => {
        const response = await AuthAxios.delete(`/categoria/${id}`);



    }

    return (
        <Fragment>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                            Nombre
                        </th>
                        <th scope="col" className="text-left relative py-3.5 px-4">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {objeto.categorias.map(({ id, nombre }) => (
                        <tr key={id}>
                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                {nombre}
                            </td>
                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                    <Link
                                        to={`/admin/categoria/edit/${id}`}
                                        className="bg-yellow-300 py-2 px-6 font-bold text-black rounded-md transition-colors duration-200 focus:outline-none"
                                    >
                                        Editar
                                    </Link>
                                    <button
                                        onClick={() => eliminarcategoria(id)}
                                        className="bg-red-800 py-2 px-6 text-white rounded-lg transition-colors duration-200 focus:outline-none"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default TableCategorias;