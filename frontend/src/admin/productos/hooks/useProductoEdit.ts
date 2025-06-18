/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { Producto, ProductoPorIdResponse } from '../../../productos/types/productos.types';
import { InputsCreateProducto } from '../types/productosAdmin.type';
import { useLoading } from '../../../global/hooks/useLoading';
import { AuthAxios } from '../../../global/api/AuthAxios';
import { BasicResponse } from '../../../types';

const useProductoEdit = () => {
    
    const { register, formState: { errors } , watch , setValue , handleSubmit } = useForm<InputsCreateProducto>();

    const { id } = useParams();
    const [ producto , setProducto ] = useState<Producto | null>(null)
    const [ imagenesSeleccionadas , setImages ] = useState<any>([]);
    const { isLoading , setIsLoading } = useLoading()
    const [ imagenesRemove , setImagenesRemove ] = useState<number[]>([])

    const formData = watch();

    useEffect( () => {

        handleGetProductoPorId()

    }, [id])

    const onChangeImages = (imageList: any) => {
        
        try {

        setImages(imageList);

        const lastImage = imageList[imageList.length - 1];
        const url = lastImage.data_url as string;
    
        setProducto({
            ...producto!,
            imagenes_productos: [
                ...producto?.imagenes_productos!,
                {
                    id: 1,
                    url: url,
                    productoID: 1
                }
            ]
        })

        } catch (error) {
            alert("Error")
        }
        // updateImages(imageList)
    };

    const handleGetProductoPorId = async () => {

        try {
            
            setIsLoading(true)

            const { data: { data } } = await AuthAxios.get<BasicResponse<ProductoPorIdResponse>>(`/producto/findone/${id}`)
            
            const { producto } = data
            
            setProducto(producto)
            // debugger
            
            Object.keys(producto!).forEach((key :any)=> {
                // Actualiza el valor del campo correspondiente con setValue
                const val = producto[key as keyof Producto]; // Aserción de tipo
                setValue(key, val);
            });

            setImages(producto.imagenes_productos)

            setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false)
            setProducto(null)
        }

    }

    const uploadImages = async () => {
        
        try 
        {
            
            const promises = []

            const imagenes = imagenesSeleccionadas.filter( (img:any) => img.hasOwnProperty('data_url') && img.hasOwnProperty('file') )
            
            for( let i = 0 ; i < imagenes.length ; i++ )
            {
                const formData = new FormData();
                
                formData.append('imagen', imagenes[i].file); 
                
                const promise = AuthAxios.post('/upload/create', formData, {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                    },
                });

                promises.push(promise)

            }

            const data = await Promise.all(promises)

            const urls = data.map( response => ( response.data.data.url ))

            return urls
          
        } catch (error) {
          console.error('Error al subir la imagen:', error);
          return []
        }
    };

    const onSubmit = async () => {
        
        try {

            const imagenes = await uploadImages() as string[]

            const payload = {
                ...formData,
                imagenes,
                imagenesRemove
            }
            
            setValue('imagenes', imagenes)

            await AuthAxios.put(`/producto/edit`, payload)

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

    const handleRemoveImage = ( _index: number ) => {

        const imagenEliminar = imagenesSeleccionadas[_index]

        if( imagenEliminar.hasOwnProperty('id') )
        {
            setImagenesRemove([
                ...imagenesRemove,
                imagenEliminar['id']
            ])
        }

        const imagenes = imagenesSeleccionadas.filter( (_d: any, index:number ) => index !== _index )

        // debugger 

        setImages(imagenes)

    }

  return {
    onChangeImages,
    handleRemoveImage,
    imagenes: imagenesSeleccionadas,
    imagenesSeleccionadas,
    formData,
    producto,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    register,
    errors
  }
}

export default useProductoEdit