import { type CrearUsuario, type EditarUsuario } from '../types/Usuario'
import { Usuario, type UsuarioAttributes } from '../models/usuario'
import { type Controller } from '../types'
import { type CreateDireccionEntrega } from '../types/DireccionEntrega'
import { DireccionEntrega } from '../models/direccion_entrega'

/**
 * @controller GetUsuarios
 * @description Controlador para obtener la lista de usuarios.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} Respuesta JSON con la lista de usuarios.
 */
export const GetUsuarios: Controller<Usuario[]> = async (req, res) => {
  try {
    // Consulta a la base de datos usando el modelo Sequelize Usuario
    const usuariosFromModel = await Usuario.findAll({
      where: {
        is_deleted: 0
      }
    })

    return res.status(200).json({
      ok: true,
      data: usuariosFromModel
    })
  } catch (err) {
    console.error(err)

    return res.status(400)
  }
}

export const CreateUsuarioCtrl: Controller<UsuarioAttributes | null, CrearUsuario> = async (req, res) => {
  try {
    const UsuarioExistente = await Usuario.findOne({ where: { correo: req.body.correo } })

    if (UsuarioExistente) {
      return res.status(401).json({
        ok: false,
        msg: 'Usuario ya registrado',
        data: null
      })
    }
    const NuevoUsuario = await Usuario.create({
      // ...req.body,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      password: req.body.password,
      Imagen: req.body.Imagen,
      nombreUsuario: '',
      RolID: 1,
      is_deleted: 0
    })

    // pubsub.publish(SUBSCRIPTIONS_EVENT.USUARIO_CREADO, {
    //   USUARIO_CREADO: []
    // })

    return res.status(200).json({
      ok: true,
      data: NuevoUsuario
    })
  } catch (error) {
    console.error(error)

    return res.status(400)
  }
}
export const CreateDireccionUsuarioCtrl: Controller<DireccionEntrega | null, CreateDireccionEntrega> = async (req, res) => {
  try {
    const UsuarioExistente = await Usuario.findOne({ where: { id: req.payload?.id_usuario } })

    if (!UsuarioExistente) {
      return res.status(401).json({
        ok: false,
        msg: 'Sin autorizacion',
        data: null
      })
    }
    const DireccionUsuario = await DireccionEntrega.create({
      ...req.body,
      usuarioId: req.payload?.id_usuario
    })

    return res.status(200).json({
      ok: true,
      data: DireccionUsuario
    })
  } catch (error) {
    console.error(error)
    return res.status(400)
  }
}

export const EditUsuarioCtrl: Controller<UsuarioAttributes | null, EditarUsuario> = async (req, res) => {
  try {
    const { id, ...rest } = req.body

    const UsuarioAEditar = await Usuario.findOne({
      where: { id }
    })

    if (!UsuarioAEditar) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario no encontrado',
        data: null
      })
    };

    UsuarioAEditar.set({
      ...rest
    })

    await UsuarioAEditar.save()

    return res.status(200).json({
      ok: true,
      data: UsuarioAEditar,
      msg: 'Usuario actualizado correctamente'
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json()
  }
}

export const EliminarUsuarioCtrl: Controller<string | null, number, any, { id: string }> = async (req, res) => {
  try {
    const { id } = req.params

    const UsuarioAEliminar = await Usuario.findOne({
      where: { id, is_deleted: 0 }
    })

    if (!UsuarioAEliminar) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario inválido',
        data: null
      })
    }

    UsuarioAEliminar.set({
      is_deleted: 1
    })

    await UsuarioAEliminar.save()

    return res.status(200).json({
      ok: true,
      data: null,
      msg: 'Usuario eliminado correctamente'
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json()
  }
}

export const GetDireccioneEntrega: Controller<DireccionEntrega[]> = async (req, res) => {
  try {
    const idUsuario = req.payload?.id_usuario

    const direccionEntrega = await DireccionEntrega.findAll({
      where: {
        // is_deleted: 0,
        usuarioId: idUsuario// pasas el id del usuario
      }
    })

    return res.status(200).json({
      ok: true,
      data: direccionEntrega
    })
  } catch (err) {
    console.error(err)

    return res.status(400)
  }
}
