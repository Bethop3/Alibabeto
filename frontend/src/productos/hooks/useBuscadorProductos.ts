/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { DisplayInfoState, Producto, ProductoQueryResponse } from '../types/productos.types';
import { AuthAxios } from '../../global/api/AuthAxios';
import { BasicResponse } from '../../types';

type QueryState = {
    idCategoria: number | null,
    nombre: string | null,
    pagina: number
}

export type ContextUseBuscadorProductos = ReturnType<typeof useBuscadorProductos>;

const useBuscadorProductos = () => {

    const [ isLoading , setLoading ] = useState<boolean>(false)
    const [ productos , setProductos ] = useState<Producto[]>([])
    const [ pagination , setPagination ] = useState({
      pagina: 1,
      totalPaginas: 0
    })

    const [ displayInfo , setDisplayInfo ] = useState<DisplayInfoState>({
      display: 'grid'
    })

    const [ queryProductos ] = useState<QueryState>({
        nombre: '',
        idCategoria: null,
        pagina: 1
    })

    useEffect( () => {

      // handleSetParams()
      
    }, [])
    
    useEffect( () => {
      
        handleSearchProductos()

    }, [queryProductos.idCategoria, pagination.pagina])

    const handleNextPage = () => {

      setPagination({
        ...pagination,
        pagina: pagination.pagina+1
      })

    }
   
    const handlePrevPage = () => {

      setPagination({
        ...pagination,
        pagina: pagination.pagina-1
      })

    }

    const changePage = ( pagina: number ) => {
      setPagination({
        ...pagination,
        pagina: pagina
      })
    }

    const handleSearchProductos = async () => {

        try {
            
            setLoading(true)

            const _url = new URL(window.location.href)

            const searchParams = new URLSearchParams(_url.search);
            
            const categoria = searchParams.get('categoria');
            const nombre = searchParams.get('nombre');
            
            console.log('categoria');
            console.log(categoria);

            const params: any = {
              pagina: pagination.pagina  
            };
              
            if (nombre !== null) 
            {
              params.nombre = nombre;
            }

            if (queryProductos.idCategoria !== null && queryProductos.idCategoria !== 0) {
              params.categoria = queryProductos.idCategoria;
            }
            
            if (categoria !== '' && categoria !== null ) {
              params.categoria = categoria
            }
              
            const query = Object.keys(params)
                .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
                .join("&");
              
            const url = `/producto/query?` + query;
              
            const { data : { data } } = await AuthAxios.get<BasicResponse<ProductoQueryResponse>>(url)

            console.log('data')
            
            console.log(data)
            
            setProductos(data.productos)

            setPagination({
              ...pagination,
              totalPaginas: data.totalPaginas ?? 0
            })

            setLoading(false)


        } catch (error) {
            console.log();
        }

    }

    const handleFilterDisplay = ( display: Display ) => {

      setDisplayInfo({
        ...displayInfo,
        display: display
      })

    }
    
  return {
    isLoading,
    productos,
    displayInfo,
    changePage,
    handleNextPage,
    handleFilterDisplay,
    handlePrevPage,
    pagina: pagination.pagina,
    totalPaginas: pagination.totalPaginas,
    queryProductos
  }

}

export default useBuscadorProductos