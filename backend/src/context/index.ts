// import verificarToken from '../utils/verificarToken'
import { GraphQLError } from 'graphql'
import { type IContext } from '../types'
// import { type IContext }

const ContextFn: IContext = async ({ req }) => {
  const token: string = req.headers.authorization ?? ''

  if (token) {
    const usuario: any = '' // verificarToken(token)

    if (!usuario) {
      throw new GraphQLError('Error de autenticacion', {
        extensions: {
          code: 'BAD_REQUEST',
          http: { status: 200 }
        }
      })
    }

    return {
      authScope: usuario?.id || null
    }
  }

  return {
    authScope: null
  }
}

export default ContextFn
