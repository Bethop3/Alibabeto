/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import useVentasHoy from '../hooks/useVentasHoy';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const AdminDashboardPage = () => {

    const { clientes, ventasHoy, productos, datosGenerales } = useVentasHoy()
    const options = {
        responsive: true,
        plugins: {
            legend: {
                title: {
                    display: false,
                    text: 'Legend Title',
                }
            },
            title: {
                display: false,
                text: 'Ventas de hoy',
            },
        },
    };

    return (
        <div>
            <section className='grid grid-cols-2 gap-5'>
                <div className='border p-5 border-gray-300 rounded-lg shadow-md'>
                    <Bar options={options} data={ventasHoy} />
                </div>
                <div className='border p-5 border-gray-300 rounded-lg shadow-md'>
                    <Bar options={options} data={clientes} />
                </div>
                <div className='border p-5 flex-col border-gray-300 rounded-lg shadow-md max-h-[500px] flex items-center justify-center'>
                    <Pie data={productos} />
                </div>
                <div className='border p-5 flex-col border-gray-300 rounded-lg shadow-md max-h-[500px] flex items-center justify-center'>

                    <h2 className='text-3xl font-bold'>Ingresos Totales: ${datosGenerales.ingresosTotales} </h2>
                </div>
            </section>
        </div>
    )
}

export default AdminDashboardPage