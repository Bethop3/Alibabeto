/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { BasicResponse } from '../../../types';
import { Pedido } from '../types/pedidoAdmin.types';
import { useForm } from 'react-hook-form';
import { socket } from '../../../global/socket/socket';

type FormState = {
    estado_pedido: number
}

const usePedidoPorId = () => {
    
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pedido, setPedido] = useState<Pedido | null>(null);
    const [ progreso , setProgreso ] = useState(0)
    const { register , setValue } = useForm<FormState>()
    const algo = useParams()
    const idPedido = algo.id

    useEffect(() => {
       
        obtenerPedido();

    }, [idPedido]);

    useEffect( () => {

        const canal = `PEDIDO_ESTADO_ACTUALIZADO_${idPedido}`

        socket.on( canal , (datos:any) => {

            calcularProgreso(datos.status)

        })

        return () => {
        
            // Desconectar el socket al desmontar el componente
          
          socket.disconnect();
    
        };

    }, [socket])
    
    // useEffect( () => {

    //     socket.on("PEDIDO_ESTADO_ACTUALIZADO", (datos:any) => {

    //         calcularProgreso(datos.status)

    //     })

    // }, [socket])

    const obtenerPedido = async () => {
        try {
            setLoading(true);
            const response = await AuthAxios.get<BasicResponse<Pedido>>(`/pedido/id/${idPedido}`);
            setPedido(response.data.data);
            setValue('estado_pedido', response.data.data.estadoPedidoID!)
            setLoading(false);
            calcularProgreso(response.data.data.estadoPedidoID!)
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

    const handleChangeStatus = async (event:any) => {

        const val = event.target.value

        try {
            
            const status = Number(val)

            const valid = (!isNaN(Number(val)) && Number(val) !== 0)
            
            if (!valid) {
                return
            }

            await AuthAxios.patch('/pedido/estado_pedido', {
                id_pedido: Number(idPedido),
                status,
            })

            toast.success('Pedido actualizado', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            console.log(error)
            toast.error('Error al actualizar el pedido', {
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

    }

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
        handleChangeStatus,
        isLoading,
        register,
        pedido
    };
};

export default usePedidoPorId;
