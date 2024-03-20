/* eslint-disable @typescript-eslint/naming-convention */
import { type Controller } from '../types'
import { type ProductoCarrito, type AgregarProductoCarrito, type CarritoResponse, type PaymentIntentDTO } from '../types/Carrito'
import { Carrito } from '../models/carrito'
import { Producto } from '../models/producto'
import { sequelize } from '../database'
import { QueryTypes } from 'sequelize'
import Decimal from 'decimal.js'
import Stripe from 'stripe'

export const PaymentIntentCtrl: Controller<any, PaymentIntentDTO> = async (req, res) => {
  try {
    const { total: _total, payment_method } = req.body

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
      apiVersion: '2023-10-16',
      typescript: true
    })
    // stripe.paymentIntents.search
    try {
      const totalPedido = new Decimal(_total)

      const t = totalPedido.times(100)

      t.toDP(2)

      const totalFinal = t.toNumber()

      console.log('totalFinal')
      console.log(totalFinal)

      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalFinal,
        payment_method,
        currency: 'mxn',
        confirm: true
        // confirm: true // Confirma automáticamente el pago
        // payment_method: 'card'
      })

      const payment_id = paymentIntent.id

      return res.status(200).json({
        ok: true,
        data: {
          secret_key: payment_id
        }
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        ok: false,
        msg: 'Error del servidor al crear el intento de pago'
      })
    }
    return stripe
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      ok: false,
      msg: 'Error del servidor al crear el intento de pago'
    })
  }
}

export const RecomendarProductosCtrl: Controller = async (req, res) => {
  try {
    const productosRelacionados = await sequelize?.query<Producto>(`
      SELECT * FROM productos 
      WHERE is_deleted = 0
      ORDER BY RAND() LIMIT 12;
  `, { type: QueryTypes.SELECT })

    return res.json({
      ok: true,
      data: productosRelacionados
    })
  } catch (error) {
    return res.status(400).json({
      ok: false
    })
  }
}

export const ObtenerCarritoUsuarioCtrl: Controller<CarritoResponse> = async (req, res) => {
  try {
    console.log(req.payload)
    const carritoUsuario = await Carrito.findAll({
      where: {
        // usuarioID: req.payload?.id_usuario
        is_deleted: 0
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

    const productosRelacionados = await sequelize?.query<Producto>(`
      SELECT * FROM productos 
      WHERE is_deleted = 0
      ORDER BY RAND() LIMIT 12;
  `, { type: QueryTypes.SELECT })

    return res.status(200).json({
      ok: false,
      data: {
        carrito: carritoUsuario,
        productosRelacionados
      }
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
      usuarioID: 1,
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

export const EliminarProductoCarrito: Controller<boolean, null, any, { id: string }> = async (req, res) => {
  try {
    const id = req.params.id

    const productoEliminar = await Carrito.findOne({
      where: {
        id
      }
    })

    if (!productoEliminar) {
      return res.status(400).json({
        ok: false,
        msg: 'Producto invalido al carrito'
      })
    }

    productoEliminar.set({
      is_deleted: 1
    })

    await productoEliminar.save()

    return res.status(200).json({
      ok: true,
      data: true,
      msg: 'Articulo eliminado del carrito'
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      ok: true,
      msg: 'Error al agregar al carrito'
    })
  }
}
