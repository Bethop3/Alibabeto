import { type CrearUsuario, type EditarUsuario } from '../types/Usuario'
import { Usuario, type UsuarioAttributes, UsuarioId, UsuarioCreationAttributes } from '../models/usuario'
import { type Controller } from '../types'

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
    const usuariosFromModel = await Usuario.findAll()

    return res.status(200).json({
      ok: true,
      data: usuariosFromModel
    })
  } catch (err) {
    console.error(err)

    return res.status(400)
  }
}

export const CreateUsuarioCtrl: Controller<UsuarioAttributes, CrearUsuario> = async (req, res) => {
  try {
    const NuevoUsuario = await Usuario.create({
      ...req.body
    })
    return res.status(200).json({
      ok: true,
      data: NuevoUsuario
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
      where: { id }
    })

    if (!UsuarioAEliminar) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario inválido',
        data: null
      })
    }
    await UsuarioAEliminar.destroy()

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
