/* eslint-disable react-hooks/exhaustive-deps */
import { useState , useEffect } from 'react'
import { BasicResponse } from '../../../types'
import { AuthAxios } from '../../../global/api/AuthAxios'
import { Categoria } from '../types/categoria.type'
import { useLoading } from '../../../global/hooks/useLoading'

const useCategorias = () => {

    const [ categorias , setCategorias ] = useState<Categoria[]>([])
    const { isLoading , setIsLoading } = useLoading()

    useEffect( () => {

        handleGetCategorias()

    }, [])

    const handleGetCategorias = async () => {

        try
        {
            
            setIsLoading(true)
            
            const { data: { data } } = await AuthAxios.get<BasicResponse<Categoria[]>>('/categoria/all')
            
            setCategorias(data)
            
            setIsLoading(false)


        }
        catch
        {
            setCategorias([])
            setIsLoading(false)
        }

    }

    return {
        isLoading,
        categorias
    }

}

export default useCategorias