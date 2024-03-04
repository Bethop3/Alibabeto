import { Role } from '../models/role'
import { UserSession } from '../models/user_session'
import { Usuario } from '../models/usuario'
import { type Controller, type UserLogin } from '../types'
import { type AuthRegistroUsuario } from '../types/Usuario'
import { encryptPassword } from '../utils/encryptPassword'
import { generateJWT } from '../utils/generateJWT'
import { validatePassword } from '../utils/validatePassword'

export const AuthValidateSession: Controller<Usuario | null, { id: string }> = async (req, res) => {
  try {
    const { id } = req.body

    const exist = await UserSession.findOne({
      where: {
        id
      }
    })

    if (!exist) {
      return res.status(401).json({
        ok: false,
        msg: 'Sin autorizacion',
        data: null
      })
    }

    const usuarioPerfil = await Usuario.findOne({
      where: {
        id: exist.user_id
      },
      attributes: {
        include: ['nombre', 'apellidos', 'correo', 'Imagen'],
        exclude: ['is_deleted', 'RolID', 'password', 'nombreUsuario']
      },
      include: [
        {
          model: Role,
          as: 'Rol'
        }
      ]
    })

    return res.status(200).json({
      ok: true,
      data: usuarioPerfil
    })
  } catch (err) {
    console.error(err)
    return res.status(500)
  }
}

export const AuthRegister: Controller<boolean | null, AuthRegistroUsuario> = async (req, res) => {
  try {
    const { correo } = req.body

    const UserExist = await Usuario.findOne({ where: { correo } })

    if (UserExist) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario ya registrado',
        data: null
      })
    }

    const passwordEncrypted = await encryptPassword(req.body.password!)

    const NewUser = await Usuario.create({
      correo,
      Imagen: req.body.Imagen,
      nombreUsuario: req.body.nombreUsuario,
      RolID: 1,
      apellidos: req.body.apellidos,
      nombre: req.body.nombre,
      password: passwordEncrypted,
      is_deleted: 0
    })

    delete NewUser.password

    res.status(201).json({
      ok: true,
      msg: 'Registrado correctamente',
      data: true
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      ok: false,
      msg: 'Error del servidor',
      data: false
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

    // if (password !== UserExist.password) {
    //   return res.status(401).json({
    //     ok: false,
    //     msg: 'Sin autorizacion',
    //     data: null
    //   })
    // }

    const isValid = validatePassword(password!, UserExist.password!)
    // const isValid = password === UserExist.password

    if (!isValid) {
      return res.status(401).json({
        ok: false,
        msg: 'Sin autorizacion',
        data: null
      })
    }

    const token = await generateJWT(UserExist.id)

    return res.status(200).json({
      ok: true,
      msg: 'Autenticado correctamente',
      data: {
        token,
        usuario: UserExist
      }
    })
  } catch (err) {
    console.error(err)
    return res.json({
      ok: false,
      msg: 'Error del servidor',
      data: null
    })
  }
}
