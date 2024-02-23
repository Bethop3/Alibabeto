// import { validateJWT } from "../auth/helpers/validateJWT";
import { validateJWT } from '../utils/validateJWT'
import { type JWTAuthPayload, type Middleware } from './../types/index'

export const MiddlewareTokenValidator: Middleware<JWTAuthPayload> = (req, res, next) => {
  const token = req.headers['x-auth-token']

  if (!token) {
    return res.status(401).json({
      data: null,
      msg: "Sin autorizacion",
      ok: false
     })
  }

  const result = validateJWT(token)

  console.log(result);

  if( result === null )
  {

    return res.status(401).json(
      {
        data: null,
        msg: "Token invalido",
        ok: false
      }
    )

  }

  req.payload = result

  next()
  
}
