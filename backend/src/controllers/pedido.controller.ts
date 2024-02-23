import { type CreatePedido } from '../types/Pedido'
import { type Controller } from '../types'
import { Pedido } from '../models/pedido'
import { Productopedido } from '../models/productopedido'

export const CreatePedidoCtrl: Controller<any, CreatePedido> = async (req, res) => {
  try {
    const { productos, ...rest } = req.body

    const pedido = await Pedido.create({
      ...rest
    })

    const productosPorPedido: Productopedido[] = []

    for (const producto of productos) {
      const productoParaPedido = await Productopedido.create({
        cantidad: producto.cantidad,
        estadoProductoFK: 1,
        iva: producto.iva,
        precio: 1,
        importe: producto.importe,
        pedidoFK: pedido.id,
        productoFK: producto.id_producto,
        total: producto.total
      })

      productosPorPedido.push(productoParaPedido)
    }

    await pedido.setProductopedidos(productosPorPedido)

    return res.status(200).json({
      ok: true,
      data: [],
      msg: 'Pedido creado correctamente'
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      ok: true,
      data: [],
      msg: 'Error al crear el pedido'
    })
  }
}
