/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Pedido } from '../../../../types/pedido.type'

import { Link } from "react-router-dom";
import EstadoPedidoLabel from "./EstadoPedidoLabel"

const PedidoTableItem = ({ id, fechaPedido, importe, iva, total, estadoPedido }: any) => {

    // Crear un objeto formateador de fecha y hora
    const formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    // Formatear la fecha y la hora
    const fechaFormateada = formatter.format(new Date(fechaPedido));

    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <span>#{id}</span>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {fechaFormateada}
            </td>
            {/* <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                    <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10"
                            stroke="#667085"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h2 className="text-sm font-normal">Refunded</h2>
                </div>
            </td> */}
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <EstadoPedidoLabel
                    estadoPedido={estadoPedido}
                />
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <strong>
                    ${importe}
                </strong>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <strong>
                    ${iva}
                </strong>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                <strong>${total}</strong>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <Link to={`/admin/pedido/view/${id}`} className="bg-alibabeto-1 py-2 px-6 text-white rounded-lg transition-colors duration-200 focus:outline-none">
                        Ver
                    </Link>
                    {/* <button className="text-white py-2 px-4 transition-colors duration-200 bg-red-500 rounded-lg hover:text-indigo-500 focus:outline-none">
                        Eliminar
                    </button> */}
                </div>
            </td>
        </tr>

    )
}

export default PedidoTableItem