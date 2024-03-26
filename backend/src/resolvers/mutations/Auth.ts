/* eslint-disable @typescript-eslint/no-unsafe-argument */

// import comparePassword from '../../../utils/comparePassword'
// import { UsuarioModel } from '../../../models/usuario'
// import hashPassword from '../../../utils/hashPassword'
// import handleError from '../../../utils/handleError'
// import crearToken from '../../../utils/crearToken'
import { GraphQLError } from 'graphql'
import handleError from '../../utils/handleError'
import { validatePassword } from '../../utils/validatePassword'
import { generateJWT } from '../../utils/generateJWT'
import { type GenInput } from '../../types'
import { Usuario } from '../../models/usuario'
import { type AuthUsuario } from '../../types/Usuario'
// import { type GenInput } from 'types'

const authLogin = async (_: any, { input }: GenInput<AuthUsuario>) => {
  // SI EL USUARIO EXISTE

  const { correo, password } = input

  const usuario = await Usuario.findOne({ where: { correo } })

  if (!usuario) {
    return handleError({
      msg: 'Usuario no valido',
      status: 'BAD_REQUEST'
    })
  }

  // SI EL PASSWORD HACE MATCH
  //   const result = await comparePassword(password, usuario.password)
  const isValid = validatePassword(password, usuario?.password!)

  if (!isValid) {
    throw new GraphQLError('Usuario no valido', {
      extensions: { code: 'BAD_USER_INPUT' }
    })
  }

  const token = await generateJWT(usuario.id)

  // usuario

  return {
    token,
    usuario
  }
}

export default {
  authLogin
}
