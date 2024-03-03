import { Usuario } from '../models/usuario'
import { type Controller, type UserLogin } from '../types'
import { type AuthRegistroUsuario } from '../types/Usuario'
import { encryptPassword } from '../utils/encryptPassword'
import { generateJWT } from '../utils/generateJWT'
import { validatePassword } from '../utils/validatePassword'

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
      RolFK: 1,
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
