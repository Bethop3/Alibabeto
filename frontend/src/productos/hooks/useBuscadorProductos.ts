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

    useEffect( () => {

      // handleSetParams()
      
    }, [])
    
    useEffect( () => {
      
      
        handleSearchProductos(  )

    }, [queryProductos.idCategoria])

    const handleSetParams = async () => {
        
        console.log('location');
        console.log(location);

        const url = new URL(window.location.href)

        debugger

        const searchParams = new URLSearchParams(url.search);
        
        console.log('searchParams');
        
        console.log(searchParams);
        
        const producto = searchParams.get('producto');
        const categoria = searchParams.get('categoria');
        
        console.log('categoria');
        console.log(categoria);

        if( categoria == '' || categoria == null )
        {
          alert('nulla')
        }
        // debugger

        setQuery( (prevState) => ({
            ...prevState,
            pagina: queryProductos.pagina,
            nombre: producto,
            idCategoria: Number(categoria)
        }))

        // alert("idCategoria" + categoria)


    }

    const handleSearchProductos = async () => {

        try {
            
            setLoading(true)

            const _url = new URL(window.location.href)

            const searchParams = new URLSearchParams(_url.search);
            
            console.log('searchParams');
            
            console.log(searchParams);
            
            const categoria = searchParams.get('categoria');
            
            console.log('categoria');
            console.log(categoria);

            // if( categoria == '' || categoria == null )
            // {
            //   alert('nulla')
            // }

            // handleSetParams()

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
            
            if (categoria !== '' || categoria !== null ) {
              params.categoria = categoria
            }

              
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