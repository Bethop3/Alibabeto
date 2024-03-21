/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { AuthAxios } from "../../../global/api/AuthAxios"
import { BasicResponse } from "../../../types"
import { Producto, ProductoQueryResponse } from "../../../productos/types/productos.types"
import { useLoading } from "../../../global/hooks/useLoading"
import usePagination from "../../../global/hooks/usePagination"

const useProductosAdmin = () => {

    const [ productos , setProductos ] = useState<Producto[]>([])
    const { isLoading , setIsLoading } = useLoading()
    const { 
        pagina , 
        setMaxPaginas ,
        totalPaginas,
        handleSiguiente,
    } = usePagination({
        inicioPagina: 1
    })
    
    useEffect(() => {

        getProductos()

    }, [pagina])

    const getProductos = async () => {

        try {
            
            setIsLoading(true)

            const { data: { data } } = await AuthAxios.get<BasicResponse<ProductoQueryResponse>>(`/producto/query?pagina=${pagina}&orden=id`)
            
            setProductos(data.productos)
            
            setMaxPaginas(data.totalPaginas!)

            setIsLoading(false)
            
        } catch (error) {
            
            setIsLoading(false)
            setProductos([])

        }

    }

    return {
        paginaActual: pagina,
        productos,
        isLoading,
        totalPaginas,
        handleSiguiente
    }
    
}

export default useProductosAdmin