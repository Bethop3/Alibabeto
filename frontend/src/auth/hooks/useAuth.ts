import { Usuario } from '../../admin/usuarios/types/usuario.types'
import { constansts } from '../constants'
import { useStore } from '../../store'

const useAuth = () => {
    
    const { setAuth } = useStore()
    
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

  return {
    handleSetSession,

  }
}

export default useAuth