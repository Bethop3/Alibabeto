import { type ProductoHasPedido, type CreatePedido } from '../types/Pedido'
import { type Controller } from '../types'
import { Pedido } from '../models/pedido'
import { Productopedido } from '../models/productopedido'
import { Producto } from '../models/producto'

export const CreatePedidoCtrl: Controller<any, CreatePedido> = async (req, res) => {
  try {
    const { productos, ...rest } = req.body

    const pedido = await Pedido.create({
      // ...rest,
      importe: rest.importe,
      iva: rest.iva,
      total: rest.total,
      clienteFK: req.payload?.id_usuario,
      direccionEntregaFK: rest.direccionEntregaFK,
      estadoPedidoFK: rest.estadoPedidoFK,
      fechaPedido: rest.fechaPedido
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

    const existenciasDescontadas = await descontarExistenciasCtrl(productos)

    if (!existenciasDescontadas.status) {
      return res.status(400).json({
        ok: false,
        data: [existenciasDescontadas],
        msg: 'Algun producto no se desconto correctamente ' + existenciasDescontadas?.id_producto
      })
    }

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

const descontarExistenciasCtrl = async (productosPedido: ProductoHasPedido[]): Promise<ResponseDescuentoExistencias> => {
  try {
    const descontados: boolean[] = []
    for (const producto of productosPedido) {
      const productoDescontar = await Producto.findOne({
        where: {
          id: producto.id_producto
        }
      })

      if (!productoDescontar || producto.cantidad > productoDescontar?.existencias) {
        return {
          status: false,
          id_producto: producto.id_producto
        }
      }

      productoDescontar.set({
        existencias: productoDescontar?.existencias - producto.cantidad
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
