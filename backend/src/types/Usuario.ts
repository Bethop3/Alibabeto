import { type DireccionEntregaAttributes } from '../models/direccion_entrega'
import { type UsuarioAttributes } from '../models/usuario'

export type CrearUsuarioDireccion = Omit<UsuarioAttributes, 'id'>
export type CrearUsuario = Omit<UsuarioAttributes, 'id'>

export type EditarUsuario = UsuarioAttributes

export type AuthRegistroUsuario = Omit<UsuarioAttributes, 'id' | 'RolFK' | 'is_deleted'>

export type EditarDireccionEntrega = DireccionEntregaAttributes

export interface AuthUsuario {
  password: string
  correo: string
}
