/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pedido } from '../../pedidos/types/pedidoAdmin.types'
import { AuthAxios } from '../../../global/api/AuthAxios'
import { BasicResponse } from '../../../types'
import { useEffect, useState } from 'react'

interface DashboardResponse { ventasHoy: Pedido[], mejoresClientes: any[] , productosMasVendidos: any[] }

const useVentasHoy = () => {

    const [ ventasHoy ,setVentasHoy ] = useState<any>({
        labels: [],
        datasets: []
    })
    
    const [ clientes ,setClientes ] = useState<any>({
        labels: [],
        datasets: []
    })
    
    const [ productos ,setProductos ] = useState<any>({
        labels: [],
        datasets: []
    })

    useEffect( () => {

        handleGetVentas()

    }, [])

    const handleGetVentas = async () => {

        try {

            const { data: { data: { ventasHoy , mejoresClientes , productosMasVendidos } } } = await AuthAxios.get<BasicResponse<DashboardResponse>>('/dashboard/all')
            
            const datasets:any = ventasHoy?.map( venta => ({
                label: `Pedido ${venta.id}`,
                data: [venta.total],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }))
           
            const datasetsClientes:any = mejoresClientes?.map( venta => ({
                label: `${venta.nombre} `,
                data: [venta.pedidos.length],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }))
            const colors =  [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ]
            const datasetsProductos:any = productosMasVendidos?.map( (venta,index) => ({
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
                datasets:datasetsClientes
            })
            
            setProductos({
                labels: ['Productos mas vendidos'],
                datasets: [
                    {
                        label: `Producto mas vendido`,
                        data: productosMasVendidos?.map( (venta) => venta.total),
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
            
            calcularVentas()

        } catch (error) {
            console.log(error)
            alert("Error")
        }
        
    }

    const calcularVentas = () => {

       
        // const data: ChartData<any> = {
        //     labels,
        //     datasets: [
        //         {
        //             data: ventas.map((venta: { total: any; }) => venta.total), // Suponiendo que tienes un campo 'total' en tus datos de venta
        //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //         {
        //             label: 'Ventas de hoy',
        //             data: ventas.map((venta: { total: any; }) => venta.total), // Suponiendo que tienes un campo 'total' en tus datos de venta
        //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //         {
        //             label: 'Ventas de hoy',
        //             data: ventas.map((venta: { total: any; }) => venta.total), // Suponiendo que tienes un campo 'total' en tus datos de venta
        //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //         {
        //             label: 'Ventas de hoy',
        //             data: ventas.map((venta: { total: any; }) => venta.total), // Suponiendo que tienes un campo 'total' en tus datos de venta
        //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //         {
        //             label: 'Ventas de hoy',
        //             data: ventas.map((venta: { total: any; }) => venta.total), // Suponiendo que tienes un campo 'total' en tus datos de venta
        //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //     ],
        // };

        
    }

  return {
    productos,
    clientes,
    ventasHoy
  }
}

export default useVentasHoy