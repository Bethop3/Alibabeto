import { Categoria } from '../models/categoria'
import { Producto } from '../models/producto'
import { type Controller } from '../types'

export const GetIndexPage: Controller = async (req, res) => {
  try {
    const celulares = await Producto.findAll({
      where: {
        is_deleted: 0,
        categoriaID: 1
      },
      limit: 8,
      attributes: { exclude: ['CreatedDate', 'categoriaID', 'is_deleted'] },
      include: [
        {
          model: Categoria, // El modelo de la tabla relacionada
          as: 'categorium' // Renombrar la asociación
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ]
    })

    const laptops = await Producto.findAll({
      where: {
        is_deleted: 0,
        categoriaID: 5
      },
      limit: 8,
      attributes: {
        exclude: ['CreatedDate', 'categoriaID', 'is_deleted']
      },
      include: [
        {
          model: Categoria, // El modelo de la tabla relacionada
          as: 'categorium' // Renombrar la asociación
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ]
    })

    return res.status(200).json({
      ok: true,
      data: {
        celulares,
        laptops
      }
    })
  } catch (err) {

  }
}
