import { type Controller } from '../types'
import { type ProductoCarrito, type AgregarProductoCarrito } from '../types/Carrito'
import { Carrito } from '../models/carrito'
import { Producto } from '../models/producto'

export const ObtenerCarritoUsuarioCtrl: Controller<Carrito[]> = async (req, res) => {
  try {
    console.log(req.payload)
    const carritoUsuario = await Carrito.findAll({
      where: {
        usuarioID: req.payload?.id_usuario
      },
      attributes: { exclude: ['is_creado', 'is_deleted', 'status', 'usuarioID', 'usuarioID', 'productoID'] },
      include: [
        {
          model: Producto, // El modelo de la tabla relacionada
          as: 'producto', // Renombrar la asociación
          attributes: [
            'id',
            'imagen',
            'codigo',
            'descripcion',
            'precio'
          ] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ]
    })

    return res.status(200).json({
      ok: false,
      data: carritoUsuario
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      ok: false
    })
  }
}

export const AgregarProductoCarritoCtrl: Controller<ProductoCarrito, AgregarProductoCarrito> = async (req, res) => {
  try {
    const { ...rest } = req.body

    const productoAgregr = await Producto.findOne({
      where: {
        id: rest.productoID
      }
    })

    if (!productoAgregr) {
      return res.status(400).json({
        ok: false,
        msg: 'Producto invalido al carrito'
      })
    }

    const productoCarrito = await Carrito.create({
      importe: rest.importe,
      iva: rest.iva,
      total: rest.total,
      usuarioID: req.payload?.id_usuario!,
      cantidad: rest.cantidad,
      productoID: rest.productoID,
      status: 1,
      is_deleted: 0
    })

    return res.status(200).json({
      ok: true,
      data: productoCarrito,
      msg: 'Producto agregado al carrito'
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      ok: true,
      msg: 'Error al agregar al carrito'
    })
  }
}
