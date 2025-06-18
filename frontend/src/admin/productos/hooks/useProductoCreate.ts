/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputsCreateProducto } from '../types/productosAdmin.type';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { SubmitHandler } from 'react-hook-form';
import { useState } from 'react'
import Swal from 'sweetalert2';

const useProductoCreate = () => {
  
    const [ isLoading , setLoading ] = useState(false)
    const [ images, updateImages ] = useState<any>([])

    const uploadImage = async () => {
        
        try 
        {
            
            const formData = new FormData();

            formData.append('imagen', images[0].file); 
          
            const { data: { data: { url } } } = await AuthAxios.post('/upload/create', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });

            return url
          
        } catch (error) {
          console.error('Error al subir la imagen:', error);
        }
      };
    

    const onSubmit: SubmitHandler<InputsCreateProducto> = async ( _payload ) => {

        try {
            
            if( isLoading ) return

            setLoading(true)
            
            const image = await uploadImage()

            const payload = {
                ..._payload,
                imagen: image,
                categoriaID: Number(_payload.categoriaID),
                existencias: Number(_payload.existencias),
            }

            await AuthAxios.post('/producto/create', payload)
            
            setLoading(false)

            await Swal.fire({
                title: 'Producto creado correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            })

            window.location.href = '/admin/productos'

        } 
        catch (error:any) 
        {
            setLoading(false)
            console.log(error)
            if( error?.response?.data?.msg )
            {
                const msg = error?.response?.data?.msg
                return await Swal.fire({
                    title: msg,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }

            await Swal.fire({
                title: 'Error al crear el producto',
                icon: 'error',
                confirmButtonText: 'Ok'
            })

        }

    }

    return {
        updateImages,
        isLoading,
        onSubmit
    }
}

export default useProductoCreate