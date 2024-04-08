/* eslint-disable @typescript-eslint/no-explicit-any */
import { Usuario } from '../../admin/usuarios/types/usuario.types'
import { constansts } from '../constants'
import { useStore } from '../../store'
import { useNavigate } from 'react-router-dom'
import { AuthAxios } from '../../global/api/AuthAxios'
import { BasicResponse } from '../../types'
import { AxiosError } from 'axios'

const useAuth = () => {
    
    const { setAuth , auth } = useStore()
    
    const navigate = useNavigate();

    const validateToken = async () => {

        try 
        {

            if( !auth )
            {
                navigate('/login')
                return
            }

            const { data: { data } } = await AuthAxios.post<BasicResponse<{ valido: boolean }>>('/auth/validateToken')

            if( !data.valido )
            {
                navigate('/login')
            }
            
        }
         catch (error) 
        {
            const axiosError = error as AxiosError<any>;
            if( axiosError.response?.data.msg )
            {
                clearSession()
                navigate('/login')
            }
        }

    }

    const handleSetSession = ( token : string , usuario : Usuario ) => {

        try {
            
            setAuth({
                token,
                usuario
            })

            window.localStorage.setItem(constansts.AUTH_SESSION_TOKEN, token)
            
            window.localStorage.setItem(constansts.AUTH_SESSION_USER, JSON.stringify(usuario))


        } catch (error) 
        {
            console.error(error)
        }

    }

    const clearSession = () => {

        window.localStorage.removeItem(constansts.AUTH_SESSION_TOKEN)
            
        window.localStorage.removeItem(constansts.AUTH_SESSION_USER)

    }

    const handleLogout = () => {

        try {
            
            clearSession()
            
            navigate('/login')

            setAuth(null)

        } catch (error) {
            navigate('/login')
        }

    }

    return {
        isAuthenticaded: auth?.token && auth?.usuario,
        handleLogout,
        validateToken,
        handleSetSession,
        usuario:auth?.usuario
    }
}

export default useAuth