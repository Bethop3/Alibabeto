import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthAxios } from '../../global/api/AuthAxios';
import { BasicResponse } from '../../types';
import { Pedido } from '../../types/PedidoUser.types';
import { useParams } from 'react-router-dom';


const useObtenerPedidoPorId = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pedido, setPedido] = useState<Pedido | null>(null);
    const algo = useParams()
    const idPedido = algo.id
    useEffect(() => {
        const obtenerPedido = async () => {
            try {
                setLoading(true);
                const response = await AuthAxios.get<BasicResponse<Pedido>>(`/pedido/id/${idPedido}`);
                setPedido(response.data.data);
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

    return {
        isLoading,
        pedido
    };
};

export default useObtenerPedidoPorId;
