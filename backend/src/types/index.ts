import { NextFunction, Request, Response } from "express";
import { ValidationError } from 'express-validator'
import { IncomingHttpHeaders } from "http";
import { JwtPayload } from "jsonwebtoken"

// Tipo para el payload de JWT que incluye la propiedad 'id'
export type JWTAuthPayload = JwtPayload & {
  id: string
}

// Tipo personalizado para las solicitudes de Express que incluyen un payload JWT en headers
type CustomRequest<T, T2, TBody, PayloadType> = Request<T, T2, TBody> & {
  payload?: PayloadType
  headers: IncomingHttpHeaders & {
    'x-auth-token'?: string
  }
}

// Tipo para controladores de Express que toman y devuelven diferentes tipos de datos
export type Controller<TResponse = any, BodyRequest = null, PayloadBody = any, ReqParams = any> = (
  (
    req: CustomRequest<ReqParams, any, BodyRequest, PayloadBody>,
    res: Response<BasicResponse<TResponse>>,
    next: NextFunction
  ) => Promise<any>
)

// Tipo para middlewares de Express que trabajan con un payload específico
export type Middleware<Payload> = (
  (
    req: CustomRequest<any, any, any, Payload>,
    res: Response<ValidationError[] | undefined>,
    next: NextFunction
  ) => void
)

// Interfaz para respuestas básicas con estructura común
export interface BasicResponse<T> {
  ok: boolean
  msg?: string
  data: T
}

// Interfaz específica para respuestas de autenticación
export interface ResponseAuth extends BasicResponse<null> {

}
