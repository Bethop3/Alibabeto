import { NextFunction, Request , Response } from "express";
import { ValidationError } from 'express-validator'
import { IncomingHttpHeaders } from "http";
import { JwtPayload } from "jsonwebtoken"

export type JWTAuthPayload = JwtPayload & {
  id: string
}

type CustomRequest<T ,T2, TBody , PayloadType> = Request<T ,T2, TBody> & {
  payload?: PayloadType
  headers           : IncomingHttpHeaders & {
    'x-auth-token'?: string
  }
}

export type Controller<TResponse = any , BodyRequest = null , PayloadBody = any , ReqParams = any> = (
  ( 
    req: CustomRequest<ReqParams , any, BodyRequest, PayloadBody> , 
    res: Response<BasicResponse<TResponse>> , 
    next: NextFunction 
  ) => Promise<any>
)

export type Middleware<Payload> = (
  ( 
    req: CustomRequest<any ,any , any , Payload>, 
    res: Response<ValidationError[] | undefined>, 
    next: NextFunction 
  ) => void
)


export interface BasicResponse<T> {
  ok: boolean
  msg?: string
  data: T
}

export interface ResponseAuth extends BasicResponse<null> {

}