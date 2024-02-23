import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Estadopedido, EstadopedidoId } from './estadopedido'
import type { Pedido, PedidoId } from './pedido'
import type { Producto, ProductoId } from './producto'

export interface ProductopedidoAttributes {
  id: number
  pedidoFK?: number
  productoFK?: number
  cantidad?: number
  precio?: number
  importe?: number
  iva?: number
  total?: number
  estadoProductoFK?: number
}

export type ProductopedidoPk = 'id'
export type ProductopedidoId = Productopedido[ProductopedidoPk]
export type ProductopedidoOptionalAttributes = 'id' | 'pedidoFK' | 'productoFK' | 'cantidad' | 'precio' | 'importe' | 'iva' | 'total' | 'estadoProductoFK'
export type ProductopedidoCreationAttributes = Optional<ProductopedidoAttributes, ProductopedidoOptionalAttributes>

export class Productopedido extends Model<ProductopedidoAttributes, ProductopedidoCreationAttributes> implements ProductopedidoAttributes {
  id!: number
  pedidoFK?: number
  productoFK?: number
  cantidad?: number
  precio?: number
  importe?: number
  iva?: number
  total?: number
  estadoProductoFK?: number

  // Productopedido belongsTo Estadopedido via estadoProductoFK
  estadoProductoFK_estadopedido!: Estadopedido
  getEstadoProductoFK_estadopedido!: Sequelize.BelongsToGetAssociationMixin<Estadopedido>
  setEstadoProductoFK_estadopedido!: Sequelize.BelongsToSetAssociationMixin<Estadopedido, EstadopedidoId>
  createEstadoProductoFK_estadopedido!: Sequelize.BelongsToCreateAssociationMixin<Estadopedido>
  // Productopedido belongsTo Pedido via pedidoFK
  pedidoFK_pedido!: Pedido
  getPedidoFK_pedido!: Sequelize.BelongsToGetAssociationMixin<Pedido>
  setPedidoFK_pedido!: Sequelize.BelongsToSetAssociationMixin<Pedido, PedidoId>
  createPedidoFK_pedido!: Sequelize.BelongsToCreateAssociationMixin<Pedido>
  // Productopedido belongsTo Producto via productoFK
  productoFK_producto!: Producto
  getProductoFK_producto!: Sequelize.BelongsToGetAssociationMixin<Producto>
  setProductoFK_producto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>
  createProductoFK_producto!: Sequelize.BelongsToCreateAssociationMixin<Producto>

  static initModel (sequelize: Sequelize.Sequelize): typeof Productopedido {
    return Productopedido.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      pedidoFK: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pedidos',
          key: 'id'
        }
      },
      productoFK: {
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
      estadoProductoFK: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'estadopedido',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'productopedido',
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
            { name: 'pedidoFK' }
          ]
        },
        {
          name: 'productoFK',
          using: 'BTREE',
          fields: [
            { name: 'productoFK' }
          ]
        },
        {
          name: 'estadoProductoFK',
          using: 'BTREE',
          fields: [
            { name: 'estadoProductoFK' }
          ]
        }
      ]
    })
  }
}
