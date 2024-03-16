import { Usuario } from '../../admin/usuarios/types/usuario.types'
import { constansts } from '../constants'
import { useStore } from '../../store'
import { useNavigate } from 'react-router-dom'

const useAuth = () => {
    
    const { setAuth , auth } = useStore()
    const navigate = useNavigate();

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

    const handleLogout = () => {

        try {
            
            window.localStorage.removeItem(constansts.AUTH_SESSION_TOKEN)
            
            window.localStorage.removeItem(constansts.AUTH_SESSION_USER)
            
            navigate('/login')

            setAuth(null)

        } catch (error) {
            navigate('/login')
        }

    }

    return {
        handleLogout,
        handleSetSession,
        usuario:auth?.usuario
    }
}

export default useAuth