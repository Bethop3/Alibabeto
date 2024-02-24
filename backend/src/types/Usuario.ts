import { type UsuarioAttributes } from '../models/usuario'

export type CrearUsuarioDireccion = Omit<UsuarioAttributes, 'id'>
export type CrearUsuario = Omit<UsuarioAttributes, 'id'>

export type EditarUsuario = UsuarioAttributes

export type AuthRegistroUsuario = Omit<UsuarioAttributes, 'id' | 'RolFK' | 'is_deleted'>
