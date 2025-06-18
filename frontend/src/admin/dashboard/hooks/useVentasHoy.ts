/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pedido } from '../../pedidos/types/pedidoAdmin.types'
import { AuthAxios } from '../../../global/api/AuthAxios'
import { BasicResponse } from '../../../types'
import { useEffect, useState } from 'react'

interface DashboardResponse { ventasHoy: Pedido[], mejoresClientes: any[], productosMasVendidos: any[], ingresosTotales: number }

const useVentasHoy = () => {

    const [datosGenerales, setDatosGenerales] = useState({
        ingresosTotales: 0
    })
    const [ventasHoy, setVentasHoy] = useState<any>({
        labels: [],
        datasets: []
    })

    const [clientes, setClientes] = useState<any>({
        labels: [],
        datasets: []
    })

    const [productos, setProductos] = useState<any>({
        labels: [],
        datasets: []
    })

    useEffect(() => {

        handleGetVentas()

    }, [])

    const handleGetVentas = async () => {

        try {

            const { data: { data: { ventasHoy, mejoresClientes, productosMasVendidos, ingresosTotales } } } = await AuthAxios.get<BasicResponse<DashboardResponse>>('/dashboard/all')

            setDatosGenerales({
                ...datosGenerales,
                ingresosTotales
            })

            const datasets: any = ventasHoy?.map(venta => ({
                label: `Pedido ${venta.id}`,
                data: [venta.total],
                backgroundColor: 'rgba(1, 91, 251,.8)',
            }))

            const datasetsClientes: any = mejoresClientes?.map(venta => ({
                label: `${venta.nombre} `,
                data: [venta.pedidos.length],
                backgroundColor: 'rgba(1, 91, 251,.8)',
            }))
            const colors = [
                'rgb(1, 91, 251)',
                'rgba(1, 91, 251,.4)',
                'rgba(1, 91, 251,.3)',
                'rgba(1, 91, 251,.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ]
            const datasetsProductos: any = productosMasVendidos?.map((venta, index) => ({
                label: `${venta?.producto?.titulo} - Cantidad: `,
                data: [venta.total],
                backgroundColor: colors[index],
                borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            }))

            setVentasHoy({
                labels: ['Ventas'],
                datasets
            })

            setClientes({
                labels: ['Pedidos por cliente'],
                datasets: datasetsClientes
            })

            setProductos({
                labels: ['Productos mas vendidos'],
                datasets: [
                    {
                        label: `Producto mas vendido`,
                        data: productosMasVendidos?.map((venta) => venta.total),
                        backgroundColor: colors,
                        borderColor: colors,
                        borderWidth: 2,
                    }
                ]
            })

            setProductos({
                labels: ['Productos mas vendidos'],
                datasets: datasetsProductos
            })

        } catch (error) {
            console.log(error)
            alert("Error")
        }

    }

    return {
        datosGenerales,
        productos,
        clientes,
        ventasHoy
    }
}

export default useVentasHoy