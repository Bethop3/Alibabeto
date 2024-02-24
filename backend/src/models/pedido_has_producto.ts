import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Estadopedido, EstadopedidoId } from './estadopedido'
import type { Pedido, PedidoId } from './pedido'
import type { Producto, ProductoId } from './producto'

export interface PedidoHasProductoAttributes {
  id: number
  pedidoID?: number
  productoID?: number
  cantidad?: number
  precio?: number
  importe?: number
  iva?: number
  total?: number
  estadoProductoID?: number
}

export type PedidoHasProductoPk = 'id'
export type PedidoHasProductoId = PedidoHasProducto[PedidoHasProductoPk]
export type PedidoHasProductoOptionalAttributes = 'id' | 'pedidoID' | 'productoID' | 'cantidad' | 'precio' | 'importe' | 'iva' | 'total' | 'estadoProductoID'
export type PedidoHasProductoCreationAttributes = Optional<PedidoHasProductoAttributes, PedidoHasProductoOptionalAttributes>

export class PedidoHasProducto extends Model<PedidoHasProductoAttributes, PedidoHasProductoCreationAttributes> implements PedidoHasProductoAttributes {
  id!: number
  pedidoID?: number
  productoID?: number
  cantidad?: number
  precio?: number
  importe?: number
  iva?: number
  total?: number
  estadoProductoID?: number

  // PedidoHasProducto belongsTo Estadopedido via estadoProductoID
  estadoProducto!: Estadopedido
  getEstadoProducto!: Sequelize.BelongsToGetAssociationMixin<Estadopedido>
  setEstadoProducto!: Sequelize.BelongsToSetAssociationMixin<Estadopedido, EstadopedidoId>
  createEstadoProducto!: Sequelize.BelongsToCreateAssociationMixin<Estadopedido>
  // PedidoHasProducto belongsTo Pedido via pedidoID
  pedido!: Pedido
  getPedido!: Sequelize.BelongsToGetAssociationMixin<Pedido>
  setPedido!: Sequelize.BelongsToSetAssociationMixin<Pedido, PedidoId>
  createPedido!: Sequelize.BelongsToCreateAssociationMixin<Pedido>
  // PedidoHasProducto belongsTo Producto via productoID
  producto!: Producto
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Producto>
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Producto>

  static initModel (sequelize: Sequelize.Sequelize): typeof PedidoHasProducto {
    return PedidoHasProducto.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      pedidoID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pedidos',
          key: 'id'
        }
      },
      productoID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'productos',
          key: 'id'
        }
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      importe: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      iva: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      estadoProductoID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'estadopedido',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'pedido_has_producto',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'pedidoFK',
          using: 'BTREE',
          fields: [
            { name: 'pedidoID' }
          ]
        },
        {
          name: 'productoFK',
          using: 'BTREE',
          fields: [
            { name: 'productoID' }
          ]
        },
        {
          name: 'estadoProductoFK',
          using: 'BTREE',
          fields: [
            { name: 'estadoProductoID' }
          ]
        }
      ]
    })
  }
}
