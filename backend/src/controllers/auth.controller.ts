import { Usuario, type UsuarioAttributes } from '../models/usuario'
import { type Controller, type UserLogin } from '../types'
import { generateJWT } from '../utils/generateJWT'

// export const AuthRegister : Controller<string | null , user> = async ( req , res ) => {
export const AuthRegister: Controller<Usuario | null, UsuarioAttributes> = async (req, res) => {
  try {
    const { correo } = req.body

    const UserExist = await Usuario.findOne({ where: { correo } })

    console.log('UserExist')
    console.log(UserExist)

    if (UserExist) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario ya registrado',
        data: null
      })
    }

    const NewUser = await Usuario.create({
      ...req.body
    })

    // NewUser.password = await encryptPassword(NewUser.password)

    console.log(NewUser.id)

    res.status(201).json({
      ok: true,
      msg: 'Registrado correctamente',
      data: NewUser
    })
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Error del servidor',
      data: null
    })
  }
}

export const AuthLogin: Controller<any | null, UserLogin> = async (req, res) => {
  try {
    const { correo, password } = req.body

    const errorAuth = 'Usuario o contraseña incorrectos.'

    const UserExist = await Usuario.findOne({ where: { $correo$: correo } })

    if (!UserExist) {
      return res.status(400).json({
        ok: false,
        msg: errorAuth,
        data: null
      })
    }

    if (password !== UserExist.password) {
      return res.status(401).json({
        ok: false,
        msg: 'Sin autorizacion',
        data: null
      })
    }
    // const isValid = validatePassword( password , UserExist.password )

    // if( !isValid )
    // {

    //     return res.status(400).json({
    //         ok: false,
    //         msg: errorAuth,
    //         data: null
    //     })

    // }

    // const token = await generateJWT(UserExist._id)

    // const user : UserResponse = {
    //     email: UserExist.email,
    //     name: UserExist.name,
    //     _id: UserExist._id,
    // }

    // const response : UserLoginResponse = {
    //     token,
    //     user
    // }
    const token = await generateJWT(UserExist.id)

    return res.status(200).json({
      ok: true,
      msg: 'Autenticado correctamente',
      data: {
        token
      }
    })
  } catch (err) {
    console.error(err)
    res.json({
      ok: false,
      msg: 'Error del servidor',
      data: null
    })
  }
}
