import { Categoria, type CategoriaAttributes } from '../models/categoria'
import { type Controller } from '../types'
import { type editarCategoria, type crearCategoria } from '../types/Categoria'

export const GetCategoria: Controller<Categoria[]> = async (req, res) => {
  try {
    const categoria = await Categoria.findAll()

    return res.status(200).json({
      ok: true,
      data: categoria
    })
  } catch (error) {

    return res.status(400).json()
  }
}

export const CreateCategory: Controller <CategoriaAttributes, crearCategoria> = async (req, res) => {
  try {
    const categoria = req.body

    // Verifica si la categoría ya existe en la base de datos
    const categoriaExistente = await Categoria.findOne({
      where: { nombre: categoria.nombre }
    })

    if (categoriaExistente) {
      return res.status(400).json({
        ok: false,
        msg: 'La categoría ya existe'
      })
    }

    // Crea una nueva categoría utilizando los datos del cuerpo de la solicitud
    const nuevaCategoria = await Categoria.create({
      ...categoria

    })

    // Retorna la respuesta con la nueva categoría creada en formato JSON
    return res.status(201).json({
      ok: true,
      data: nuevaCategoria
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'Error al crear la categoría'
    })
  }
}
export const EditCategoryC: Controller <CategoriaAttributes | null, editarCategoria> = async (req, res) => {
  try {
    const { id, ...rest } = req.body

    // Busca la categoría a editar por su ID
    const categoriaAEditar = await Categoria.findByPk(id)

    // Si no se encuentra la categoría, devuelve un mensaje de error
    if (!categoriaAEditar) {
      return res.status(400).json({
        ok: false,
        msg: 'Categoría no encontrada'
      })
    }
    const categoriaExistente = await Categoria.findOne({
      where: { nombre: rest.nombre }
    })

    if (categoriaExistente) {
      return res.status(400).json({
        ok: false,
        msg: 'La categoría ya existe'
      })
    }
    // Actualiza los campos de la categoría con los nuevos valores proporcionados
    await categoriaAEditar.update(rest)

    // Retorna una respuesta exitosa con la categoría actualizada
    return res.status(200).json({
      ok: true,
      data: categoriaAEditar,
      msg: 'Categoría actualizada correctamente'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      ok: false,
      msg: 'Error al actualizar la categoría'
    })
  }
}

export const EliminarCategoriaCtrl: Controller<string | null, number, any, { id: string }> = async (req, res) => {
  try {
    // Extrae el 'id' de los parámetros de la solicitud
    const { id } = req.params

    // Busca la categoría a eliminar por su 'id'
    const categoriaAEliminar = await Categoria.findByPk(id)

    // Verifica si la categoría existe
    if (!categoriaAEliminar) {
      return res.status(400).json({
        ok: false,
        msg: 'Categoría no encontrada',
        data: null
      })
    }

    // Elimina la categoría de la base de datos
    await categoriaAEliminar.destroy()

    // Retorna la respuesta con un mensaje de éxito en formato JSON
    return res.status(200).json({
      ok: true,
      data: null,
      msg: 'Categoría eliminada correctamente'
    })
  } catch (err) {
    // En caso de error, imprime el error en la consola y retorna un código de estado 400
    return res.status(400).json()
  }
}

export const ObtenerCategoriaPorIdCtrl: Controller<Categoria | null, number, any, { id: string }> = async (req, res) => {
  try {
    const { id } = req.params

    const categoria = await Categoria.findOne({
      where: { id }
    })

    if (!categoria) {
      return res.status(400).json({
        ok: false,
        msg: 'Categoría no encontrada',
        data: null
      })
    }

    return res.status(200).json({
      ok: true,
      data: categoria
    })
  } catch (error) {
    return res.status(400).json({
      ok: false,
      data: null
    })
  }
}
