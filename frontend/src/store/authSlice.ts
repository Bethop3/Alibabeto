import { type Usuario } from '../admin/usuarios/types/usuario.types'
import { constansts } from '../auth/constants'
import type { Auth } from '../auth/types/auth.types'
import { type StateCreator } from 'zustand'

export interface AuthSliceStore {
    isLoading: boolean
    setAuth: (auth: Auth | null) => void
    setUsuario: (usuario: Usuario) => void
    usuario: Usuario | null,
    auth: Auth | null
    clientError: string | null
    totalCarrito: number
    setTotalCarrito: (total: number) => void
}

// export const createAuthSlice: StateCreator<> = create<AuthSliceStore>()((set) => ({
//     auth: null,
//     setAuth: (auth: Auth) => set((state) => ({ auth })),
// }))

const getAuth = () => {
        
    const usuario = JSON.parse(localStorage.getItem(constansts.AUTH_SESSION_USER)!) as Usuario
    const token = localStorage.getItem(constansts.AUTH_SESSION_TOKEN)! as string

    return {
        usuario,
        token
    }
    
}

export const createAuthSlice: StateCreator<AuthSliceStore, [], [], AuthSliceStore> = (set) => ({
    auth: getAuth(),
    totalCarrito: 0,
    usuario: null,
    setAuth: (auth: Auth | null) => set(() => ({ auth })),
    setUsuario: (usuario: Usuario) => set((store) => ({ 
        ...store,
        auth: {  
            ...store.auth!,
            usuario, 
        } 
    })),
    setTotalCarrito: ( total : number ) => set( () => ({ totalCarrito : total })),
    clientError: null,
    isLoading: false
})