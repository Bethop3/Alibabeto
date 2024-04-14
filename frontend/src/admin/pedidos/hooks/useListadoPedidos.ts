/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pedido } from '../types/pedidoAdmin.types';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { BasicResponse } from '../../../types';

const useListadoPedidos = () => {
    const [ isLoading , setLoading ] = useState<boolean>(false)
    const [ pedidos , setPedidos ] = useState<Pedido[]>([])
  
    const socket = io('http://localhost:3000');
  
    useEffect(() => {
  
      handleGetPedidos()
  
      return () => {
        // Desconectar el socket al desmontar el componente
        socket.disconnect();
      };
    }, []);
  
    useEffect(() => {
      
      // Escucha eventos del servidor
      
      socket.on('PEDIDO_CREADO', (pedido:any) => {
        
          // alert('se creo un pedido')
        
          console.log('Mensaje desde el servidor:', pedido);
  
          
          // alert("pedido nuevo")
          
          setPedidos([
            pedido.pedido,
            ...pedidos,
          ])
  
          toast.success('Hay pedidos nuevos', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
  
      });
  
      return () => {
        
          // Desconectar el socket al desmontar el componente
        
        socket.disconnect();
  
      };
  
    }, [socket])
  
    const handleGetPedidos = async () => {
  
      try {
  
        setLoading(true)
        
        const { data: { data } } = await AuthAxios.get<BasicResponse<Pedido[]>>("/pedido/all")
        
        setPedidos(data)
  
        setLoading(false)
        
      } catch (error) {
  
        setLoading(false)
      }
  
    }
  
    return {
      isLoading,
      pedidos
    }
}

export default useListadoPedidos