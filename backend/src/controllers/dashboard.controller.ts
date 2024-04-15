import { Usuario } from '../models/usuario'
import { Pedido } from '../models/pedido'
import { type Controller } from '../types'
import { Op } from 'sequelize'
import { PedidoHasProducto } from '../models/pedido_has_producto'
import { sequelize } from '../database'
import { Producto } from '../models/producto'

interface DashboardResponse { ventasHoy: Pedido[], mejoresClientes: Usuario[], productosMasVendidos: any[], ingresosTotales: any }

export const getDashboard: Controller<DashboardResponse> = async (req, res) => {
  try {
    // Obtener los pedidos de hoy (limitado a 7 registros)
    const fechaHoy = new Date()
    fechaHoy.setHours(0, 0, 0, 0) // Establecer la hora a las 00:00:00

    const ventasHoy = await Pedido.findAll({
      where: {
        fechaPedido: {
          [Op.gte]: fechaHoy // Pedidos con fecha igual o posterior a hoy
        }
      }
    })

    // Obtener los mejores clientes (limitado a 7 registros)
    const mejoresClientes = await Usuario.findAll({
      include: [{
        model: Pedido,
        as: 'pedidos' // Nombre del alias definido en la relación
      }],
      limit: 7 // Limita la cantidad de resultados a 7
      // Agrega condiciones o filtros para obtener los mejores clientes, por ejemplo, ordenando por el total de ventas
      // y limitando el resultado a los mejores clientes que desees mostrar
    })

    const productosMasVendidos = await PedidoHasProducto.findAll({
      attributes: ['productoId', [sequelize.fn('COUNT', sequelize.col('productoId')), 'total']], // Contar la cantidad de veces que aparece cada producto
      group: ['productoId'],
      order: [[sequelize.literal('total'), 'DESC']], // Ordenar por la cantidad total en orden descendente
      include: [
        {
          model: Producto,
          as: 'producto'
        }
      ],
      limit: 7 // Limitar la cantidad de resultados a 7
    })

    const ingresosTotales = await Pedido.sum('total', {
      where: {
        fechaPedido: {
          [Op.gte]: fechaHoy
        }
      }
    })

    // Enviar los datos como respuesta
    return res.json({
      data: { ventasHoy, mejoresClientes, productosMasVendidos, ingresosTotales }
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json()
  }
}
