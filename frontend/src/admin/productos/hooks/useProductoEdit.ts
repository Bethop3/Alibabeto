/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { BasicResponse } from '../../../types';
import { Producto, ProductoPorIdResponse } from '../../../productos/types/productos.types';
import { useLoading } from '../../../global/hooks/useLoading';
import { useForm } from 'react-hook-form';
import { InputsCreateProducto } from '../types/productosAdmin.type';
import Swal from 'sweetalert2';

const useProductoEdit = () => {
    const { register, formState: { errors ,  } , watch , setValue , handleSubmit } = useForm<InputsCreateProducto>();

    const { id } = useParams();
    const [ producto , setProducto ] = useState<Producto | null>(null)
    const { isLoading , setIsLoading } = useLoading()
    
    // const descripcion =
    const formData = watch();

    useEffect( () => {

        handleGetProductoPorId()

    }, [id])

    const handleGetProductoPorId = async () => {

        try {
            
            setIsLoading(true)

            const { data: { data } } = await AuthAxios.get<BasicResponse<ProductoPorIdResponse>>(`/producto/findone/${id}`)
            
            setProducto(data.producto)
            // debugger
            Object.keys(data.producto!).forEach((key :any)=> {
                // Actualiza el valor del campo correspondiente con setValue
                // debugger
                setValue(key, data.producto[key]);
              });
            setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false)
            setProducto(null)
        }

    }

    const onSubmit = async () => {
        
        try {
            
            await AuthAxios.put(`/producto/edit`, formData)

            await Swal.fire({
                icon: 'success',
                title: "Producto actualizado"
            })
            
        } catch (error) {
            console.error(error)
            await Swal.fire({
                icon: 'error',
                title: "Error al actualizar el producto"
            })
        }
    }

  return {
    producto:formData,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    register,
    errors
  }
}

export default useProductoEdit