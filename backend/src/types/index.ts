import { type NextFunction, type Request, type Response } from 'express'
import { type IncomingHttpHeaders } from 'http'
import { type JwtPayload } from 'jsonwebtoken'
import { type UsuarioAttributes } from '../models/usuario'

// Tipo para el payload de JWT que incluye la propiedad 'id'
export type JWTAuthPayload = JwtPayload & {
  id_usuario: number
}

// Tipo personalizado para las solicitudes de Express que incluyen un payload JWT en headers
export type CustomRequest<T, T2, TBody, PayloadType, ReqQuery> = Request<T, T2, TBody, ReqQuery> & {
  payload?: PayloadType
  headers: IncomingHttpHeaders & {
    'x-auth-token'?: string
  }
}

// Tipo para controladores de Express que toman y devuelven diferentes tipos de datos
export type Controller<TResponse = any, BodyRequest = null, PayloadBody = JWTAuthPayload, ReqParams = any, ReqQuery = any> = (
  (
    req: CustomRequest<ReqParams, any, BodyRequest, PayloadBody | JWTAuthPayload, ReqQuery>,
    res: Response<BasicResponse<TResponse>>,
    next: NextFunction
  ) => Promise<any>
)

// Tipo para middlewares de Express que trabajan con un payload específico
export type Middleware<Payload, TResponse = any> = (
  (
    req: CustomRequest<any, any, any, Payload, any>,
    res: Response<BasicResponse<TResponse>>,
    next: NextFunction
  ) => void
)

// Interfaz para respuestas básicas con estructura común
export interface BasicResponse<T> {
  ok?: boolean
  msg?: string
  data?: T
  errors?: any
}

// Interfaz específica para respuestas de autenticación
export interface ResponseAuth extends BasicResponse<null> {

}

export type UserLogin = Pick<UsuarioAttributes, 'correo' | 'password'>
