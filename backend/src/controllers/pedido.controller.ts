/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PedidoHasProducto } from '../models/pedido_has_producto'
import { type CreatePedidoHasProducto, type CreatePedido } from '../types/Pedido'
import { Estadopedido } from '../models/estadopedido'
import { Producto } from '../models/producto'
import { type Controller } from '../types'
import { Pedido } from '../models/pedido'
import { getIo } from '../socket/io'
import { DireccionEntrega } from '../models/direccion_entrega'

export const getPedidosCtrl: Controller<any, CreatePedido> = async (req, res) => {
  const pedidos = Pedido.findAll()

  return res.status(200).json({
    data: pedidos
  })
}
export const getIdPedidosCtrl: Controller<any, CreatePedido> = async (req, res) => {
  const idPedido = req.params.id
  const pedidos = await Pedido.findOne({
    where: {
      id: idPedido
    },
    include: [
      {
        model: PedidoHasProducto,
        as: 'pedido_has_productos',
        include: [
          {
            model: Producto, as: 'producto'
          }
        ]
      },
      {
        model: DireccionEntrega, // El modelo de la tabla relacionada
        as: 'direccionEntrega' // Renombrar la asociación
      }
    ]
  })
  console.log(pedidos)
  return res.status(200).json({
    data: pedidos
  })
}

export const getAllPedidosCtrl: Controller<any, Pedido[]> = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      where: {
        usuarioID: req.payload?.id_usuario
      },
      order: [['id', 'DESC']], // Ordenar por la propiedad 'id' de forma descendente
      include: [
        {
          model: Estadopedido, // El modelo de la tabla relacionada
          as: 'estadoPedido' // Renombrar la asociación
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        },
        {
          model: PedidoHasProducto, // El modelo de la tabla relacionada
          as: 'pedido_has_productos', // Renombrar la asociación
          include: [
            {
              model: Producto,
              as: 'producto'
            }
          ]
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ]
    })

    return res.status(200).json(({
      ok: true,
      data: pedidos
    }))
  } catch (error) {

  }
}

export const getAllPedidosAdminCtrl: Controller<any, Pedido[]> = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      order: [['id', 'DESC']], // Ordenar por la propiedad 'id' de forma descendente
      include: [
        {
          model: Estadopedido, // El modelo de la tabla relacionada
          as: 'estadoPedido' // Renombrar la asociación
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        },
        {
          model: PedidoHasProducto, // El modelo de la tabla relacionada
          as: 'pedido_has_productos', // Renombrar la asociación
          include: [
            {
              model: Producto,
              as: 'producto'
            }
          ]
          // attributes: ['nombre', 'descripcion'] // Atributos específicos de la tabla relacionada que deseas incluir
        }
      ]
    })

    return res.status(200).json(({
      ok: true,
      data: pedidos
    }))
  } catch (error) {

  }
}

interface ActualizarEstadoPedidoT {
  id_pedido: number
  status: number
}

export const ActualizarEstadoPedido: Controller<any, ActualizarEstadoPedidoT> = async (req, res) => {
  try {
    const pedido = await Pedido.findOne({
      where: {
        id: req.body.id_pedido
      }
    })

    if (!pedido) {
      return res.status(404).json({
        ok: false,
        msg: 'Pedido invalido'
      })
    }

    pedido.set({
      estadoPedidoID: req.body.status
    })

    await pedido.save()

    const io = getIo()

    const canal = `PEDIDO_ESTADO_ACTUALIZADO_${pedido.id}`

    io.emit(canal, {
      status: pedido.estadoPedidoID
    })

    console.log(canal)

    return res.status(201).json({
      ok: true
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Error del servidor'
    })
  }
}

export const CreatePedidoCtrl: Controller<any, CreatePedido> = async (req, res) => {
  try {
    const { productos, total, payment_id, ...rest } = req.body

    const pedido = await Pedido.create({
      // ...rest,
      importe: rest.importe,
      iva: rest.iva,
      total,
      usuarioID: req.payload?.id_usuario,
      direccionEntregaID: rest.direccionEntregaID,
      estadoPedidoID: rest.estadoPedidoID,
      fechaPedido: rest.fechaPedido,
      payment_id
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
