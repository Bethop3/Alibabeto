/* eslint-disable no-debugger */
/* eslint-disable use-isnan */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Display, DisplayInfoState, Producto, ProductoQueryResponse } from '../types/productos.types';
import { AuthAxios } from '../../global/api/AuthAxios';
import { BasicResponse } from '../../types';
import { useForm } from 'react-hook-form';
import useCategorias from '../../admin/categorias/hooks/useCategorias';

type QueryState = {
    idCategoria: number | null,
    nombre: string | null,
    pagina: number
}

type InputQueryProductos = {
  categoria: string
}

export type ContextUseBuscadorProductos = ReturnType<typeof useBuscadorProductos>;

const useBuscadorProductos = () => {

    const { register , watch , setValue } = useForm<InputQueryProductos>()

    const formData = watch()

    const [ isLoading , setLoading ] = useState<boolean>(false)
    const [ productos , setProductos ] = useState<Producto[]>([])
    const { categorias } = useCategorias()
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

    }, 
    [
      // queryProductos.idCategoria, 
      pagination.pagina,
      formData.categoria
    ])

    // useEffect( () => {
      
    //   setPagination({
    //     ...pagination,
    //     pagina: 1
    //   })

    // }, 
    // [
    //   formData.categoria
    // ])

    const handleNextPage = () => {

      setPagination({
        ...pagination,
        pagina: pagination.pagina+1
      })

      window.scrollTo({
        top: 0,
        behavior: 'smooth' // La opción 'smooth' proporciona un desplazamiento suave
      });

    }

    const handleChangeCategoria = (event:any) => {
      
      // debugger
      
      const categoria = event.target.value

      setValue("categoria", categoria)

      setPagination({
        ...pagination,
        pagina: 1
      })

    }
   
    const handlePrevPage = () => {

      setPagination({
        ...pagination,
        pagina: pagination.pagina-1
      })

      window.scrollTo({
        top: 0,
        behavior: 'smooth' // La opción 'smooth' proporciona un desplazamiento suave
      });

    }

    const changePage = ( pagina: number ) => {
      setPagination({
        ...pagination,
        pagina: pagina
      })
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // La opción 'smooth' proporciona un desplazamiento suave
      });
    }

    const handleSearchProductos = async () => {

        try {
            
            setLoading(true)

            const _url = new URL(window.location.href)

            const searchParams = new URLSearchParams(_url.search);
            
            let categoria = formData.categoria ?? searchParams.get('categoria');
            const nombre = searchParams.get('nombre');

            // debugger
            if( (categoria !== null && categoria !== undefined && categoria !== '') && !Number.isNaN(categoria) )
            {
              searchParams.set('categoria', categoria as string);
              setValue("categoria", categoria)
            }

            // Agregar o actualizar un parámetro de búsqueda

// Crear una nueva URL con los parámetros actualizados
            const nuevaURL = `${window.location.pathname}?${searchParams.toString()}`;

            window.history.pushState({ path: nuevaURL }, '', nuevaURL);
                  

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

            
            
            setProductos(data.productos)

            setPagination({
              ...pagination,
              totalPaginas: data.totalPaginas ?? 0
            })
            
            await new Promise(resolve => setTimeout(resolve, 1000));

            setLoading(false)


        } catch (error) {
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
    register,
    formData,
    productos,
    categorias,
    displayInfo,
    changePage,
    handleNextPage,
    handlePrevPage,
    handleFilterDisplay,
    handleChangeCategoria,
    pagina: pagination.pagina,
    totalPaginas: pagination.totalPaginas,
    queryProductos
  }

}

export default useBuscadorProductos