import { PedidoHasProducto } from '../models/pedido_has_producto'
import { type CreatePedidoHasProducto, type CreatePedido } from '../types/Pedido'
import { Producto } from '../models/producto'
import { type Controller } from '../types'
import { Pedido } from '../models/pedido'
import { getIo } from '../socket/io'

export const CreatePedidoCtrl: Controller<any, CreatePedido> = async (req, res) => {
  try {
    const { productos, ...rest } = req.body

    const pedido = await Pedido.create({
      // ...rest,
      importe: rest.importe,
      iva: rest.iva,
      total: rest.total,
      usuarioID: req.payload?.id_usuario,
      direccionEntregaID: rest.direccionEntregaID,
      estadoPedidoID: rest.estadoPedidoID,
      fechaPedido: rest.fechaPedido
    })

    const productosPorPedido: PedidoHasProducto [] = []

    for (const producto of productos) {
      const productoParaPedido = await PedidoHasProducto.create({
        cantidad: producto.cantidad,
        estadoProductoID: 1,
        iva: producto.iva,
        precio: 1,
        importe: producto.importe,
        pedidoID: pedido.id,
        productoID: producto.productoID,
        total: producto.total
      })

      productosPorPedido.push(productoParaPedido)
    }

    await pedido.setPedido_has_productos(productosPorPedido)

    const existenciasDescontadas = await descontarExistenciasCtrl(productos)

    if (!existenciasDescontadas.status) {
      return res.status(400).json({
        ok: false,
        data: [existenciasDescontadas],
        msg: 'Algun producto no se desconto correctamente ' + existenciasDescontadas?.id_producto
      })
    }

    const io = getIo()

    io.emit('PEDIDO_CREADO', {
      pedido
    })

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
interface ResponseDescuentoExistencias {
  status: boolean
  id_producto?: number
}

const descontarExistenciasCtrl = async (productosPedido: CreatePedidoHasProducto[]): Promise<ResponseDescuentoExistencias> => {
  try {
    const descontados: boolean[] = []
    for (const producto of productosPedido) {
      const productoDescontar = await Producto.findOne({
        where: {
          id: producto.productoID
        }
      })

      if (!productoDescontar || !producto || producto.cantidad! > productoDescontar?.existencias) {
        return {
          status: false,
          id_producto: producto.productoID
        }
      }

      productoDescontar.set({
        existencias: productoDescontar?.existencias - producto.cantidad!
      })

      await productoDescontar.save()

      descontados.push(true)
    }

    return {
      status: true
    }
  } catch (err) {
    console.error(err)
    return {
      status: false
    }
  }
}
