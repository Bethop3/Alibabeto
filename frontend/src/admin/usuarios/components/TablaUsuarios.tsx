import { AdminUsuariosListadoContext } from '../context/AdminUsuariosListadoContext'
import { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

const TablaUsuarios = () => {

    const { usuarios, handleDeleteUsuario } = useContext(AdminUsuariosListadoContext)!

    return (
        <Fragment>
            <section className="gap-5 my-10">

                {/* <div className='mt-10 mx-auto flex mb-10'>
                    <Paginacion />
                </div> */}

                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                <div className="flex items-center gap-x-3">
                                    <span className="font-bold">ID</span>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 font-bold w-[10%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Nombre
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Apellidos
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm w-[30%] font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Correo
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >
                                Rol
                            </th>
                            <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 dark:text-gray-400"
                            >

                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {
                            usuarios.map(({ id, Rol, correo, apellidos, nombre }) => (
                                <tr key={id}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <span>#{id}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <strong>{nombre}</strong>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <strong>{apellidos}</strong>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        <p className="w-[100%] whitespace-no-wrap whitespace-normal overflow-hidden">
                                            {correo}
                                        </p>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                        {Rol.nombre}
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <Link to={`/admin/usuarios/edit/${id}`} className="bg-yellow-300 py-2 px-6 font-bold text-black rounded-md transition-colors duration-200 focus:outline-none">
                                                Editar
                                            </Link>
                                            <button onClick={() => handleDeleteUsuario(id)} className="bg-red-500 py-2 px-6 text-white rounded-lg transition-colors duration-200 focus:outline-none">
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* <Paginacion /> */}

            </section>
        </Fragment >
    )
}

export default TablaUsuarios