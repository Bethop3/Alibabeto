/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { AuthAxios } from "../../global/api/AuthAxios"
import { BasicResponse } from "../../types"
import { Producto } from "../../productos/types/productos.types"

const useProductosGrid = ( idCategoria: number ) => {

    const [ isLoading , setLoading ] = useState<boolean>(false)
    const [ productos , setProductos ] = useState<Producto[]>([])

    useEffect( () => {

        handleGetProductos()

    } , [])

    const handleGetProductos = async () => {

        try {
            
            setLoading(true)
            
            const { data: { data } } = await AuthAxios.get<BasicResponse<Producto[]>>(`/producto/query?categoria=${idCategoria}&landing=true`)
            
            setProductos(data)

            setLoading(false)
            
        } catch (error) 
        {
            setLoading(false)
        }

    }

  return {
    isLoading,
    productos
  }
}

export default useProductosGrid