/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Producto } from '../types/productos.types';
import { AuthAxios } from '../../global/api/AuthAxios';
import { BasicResponse } from '../../types';

type QueryState = {
    idCategoria: number | null,
    nombre: string | null,
    pagina: number
}

const useBuscadorProductos = () => {

    const [ isLoading , setLoading ] = useState<boolean>(false)
    const [ productos , setProductos ] = useState<Producto[]>([])

    const [ queryProductos , setQuery ] = useState<QueryState>({
        nombre: '',
        idCategoria: null,
        pagina: 1
    })
    const location = useLocation()

    useEffect( () => {

        handleSetParams()

        handleSearchProductos()

    }, [])

    const handleSetParams = () => {
        
        console.log('location');
        console.log(location);

        const searchParams = new URLSearchParams(location.search);
        
        console.log('searchParams');
        
        console.log(searchParams);
        
        const producto = searchParams.get('producto');
        const categoria = searchParams.get('categoria');
        
        console.log('producto');
        
        console.log(producto);

        debugger

        setQuery({
            ...queryProductos,
            nombre: producto,
            idCategoria: Number(categoria)
        })


    }

    const handleSearchProductos = async () => {

        try {
            
            setLoading(true)

            handleSetParams()

            const params: any = {
              pagina: queryProductos.pagina  
            };
              
            if (queryProductos.nombre !== null) 
            {
              params.nombre = queryProductos.nombre;
            }
              
            if (queryProductos.idCategoria !== null && queryProductos.idCategoria !== 0) {
              params.categoria = queryProductos.idCategoria;
            }

            debugger
              
            const query = Object.keys(params)
                .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
                .join("&");
              
            const url = `/producto/query?` + query;
              
            const { data : { data } } = await AuthAxios.get<BasicResponse<Producto[]>>(url)

            console.log('data')
            console.log(data)
            
            setProductos(data)

            setLoading(false)


        } catch (error) {
            console.log();
        }

    }
    
  return {
    isLoading,
    productos,
    queryProductos
  }

}

export default useBuscadorProductos