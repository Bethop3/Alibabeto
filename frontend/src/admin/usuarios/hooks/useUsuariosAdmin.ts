/* eslint-disable react-hooks/exhaustive-deps */
import { useLoading } from "../../../global/hooks/useLoading"
import usePagination from "../../../global/hooks/usePagination"
import { AuthAxios } from "../../../global/api/AuthAxios"
import { Usuario } from "../types/usuario.types"
import { BasicResponse } from "../../../types"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const useUsuariosAdmin = () => {
    
    const [ usuarios , setUsuarios ] = useState<Usuario[]>([])
    const { isLoading , setIsLoading } = useLoading()
    const { 
        pagina , 
        // setMaxPaginas ,
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

            const { data: { data } } = await AuthAxios.get<BasicResponse<Usuario[]>>(`/usuario/all`)
            
            setUsuarios(data)
            
            setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false)
            setUsuarios([])
        }

    }

    const handleDeleteUsuario = async (id:number) => {

        try {
            
            const { isConfirmed } = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¡No podrás revertir esto!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, borrarlo'
            });

            if( !isConfirmed ) return

            setIsLoading(true)

            await AuthAxios.delete(`/usuario/delete/${id}`)
            
            setIsLoading(false)

            
            await Swal.fire({
                title: 'Usuario eliminado correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            
            await getProductos()
            
        } catch (error) {
            setIsLoading(false)
            setUsuarios([])
        }

    }

    return {
        usuarios,
        isLoading,
        totalPaginas,
        handleSiguiente,
        handleDeleteUsuario,
        paginaActual: pagina,
    }
}

export default useUsuariosAdmin