import { type Controller } from '../types'
import { type ProductoCarrito, type AgregarProductoCarrito } from '../types/Carrito'
import { Carrito } from '../models/carrito'
import { Producto } from '../models/producto'

export const AgregarProductoCarritoCtrl: Controller<ProductoCarrito, AgregarProductoCarrito> = async (req, res) => {
  try {
    const { ...rest } = req.body

    const productoAgregr = await Producto.findOne({
      where: {
        id: rest.productoFK
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
      usuarioFK: req.payload?.id_usuario!,
      cantidad: rest.cantidad,
      productoFK: rest.productoFK,
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
