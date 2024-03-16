import type { Usuario } from "../../admin/usuarios/types/usuario.types"

export type Auth = {
    token: string
    usuario: Usuario
}