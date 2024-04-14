import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthAxios } from '../../global/api/AuthAxios';
import { BasicResponse } from '../../types';
import { Pedido } from '../../types/PedidoUser.types';

const useListadoPedidosUsuarioNormal = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [pedidos, setPedidos] = useState<Pedido[]>([]);
    
    useEffect(() => {
        
        handleGetPedidosUsuario();

    }, []);

    const handleGetPedidosUsuario = async () => {
        try {
            setLoading(true);
            const response = await AuthAxios.get<BasicResponse<Pedido[]>>(`/pedido/all`);
            setPedidos(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error al obtener los pedidos del usuario:", error);
            setLoading(false);
            toast.error('Error al obtener los pedidos del usuario', {
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

    return {
        isLoading,
        pedidos
    };
};

export default useListadoPedidosUsuarioNormal;
