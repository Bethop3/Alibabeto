/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthAxios } from '../../global/api/AuthAxios';
import { BasicResponse } from '../../types';
import { Pedido } from '../../types/PedidoUser.types';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';


const useObtenerPedidoPorId = () => {
    
    const socket = io(import.meta.env.VITE_API_URL ?? 'http://localhost:3000');
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pedido, setPedido] = useState<Pedido | null>(null);
    const [ progreso , setProgreso ] = useState(0)
    const algo = useParams()
    const idPedido = algo.id

    useEffect(() => {
        const obtenerPedido = async () => {
            try {
                setLoading(true);
                const response = await AuthAxios.get<BasicResponse<Pedido>>(`/pedido/id/${idPedido}`);
                const _pedido = response.data.data
                setPedido(_pedido);
                calcularProgreso(_pedido.estadoPedidoID)
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener el pedido:", error);
                setLoading(false);
                toast.error('Error al obtener el pedido', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        };

        obtenerPedido();

    }, [idPedido]);

    useEffect( () => {
        
        const canal = `PEDIDO_ESTADO_ACTUALIZADO_${idPedido}`
        
        // alert(canal)

        socket.on(canal, (datos:any) => {

            // alert("dentro del on")

            calcularProgreso(datos.status)

        })

        return () => {
        
            // alert('desconectado')
            // Desconectar el socket al desmontar el componente
          
          socket.disconnect();
    
        };

    }, [socket])

    function calcularProgreso(estado?: number) {

        if (!estado) {
            setProgreso(0)
        }
        
        if (estado == 1) {
            setProgreso(25)
        }
        
        if (estado == 2) {
            setProgreso(50)
            
        }
        if (estado == 3) {
            setProgreso(75)
            
        }
        if (estado == 4) {
            setProgreso(100)
        }

    }

    return {
        progreso,
        isLoading,
        pedido
    };
};

export default useObtenerPedidoPorId;
