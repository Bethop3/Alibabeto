import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { PedidoHasProducto, PedidoHasProductoId } from './pedido_has_producto'
import type { Pedido, PedidoId } from './pedido'

export interface EstadopedidoAttributes {
  id: number
  nombre: string
}

export type EstadopedidoPk = 'id'
export type EstadopedidoId = Estadopedido[EstadopedidoPk]
export type EstadopedidoOptionalAttributes = 'id'
export type EstadopedidoCreationAttributes = Optional<EstadopedidoAttributes, EstadopedidoOptionalAttributes>

export class Estadopedido extends Model<EstadopedidoAttributes, EstadopedidoCreationAttributes> implements EstadopedidoAttributes {
  id!: number
  nombre!: string

  // Estadopedido hasMany PedidoHasProducto via estadoProductoID
  pedido_has_productos!: PedidoHasProducto[]
  getPedido_has_productos!: Sequelize.HasManyGetAssociationsMixin<PedidoHasProducto>
  setPedido_has_productos!: Sequelize.HasManySetAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  addPedido_has_producto!: Sequelize.HasManyAddAssociationMixin<PedidoHasProducto, PedidoHasProductoId>
  addPedido_has_productos!: Sequelize.HasManyAddAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  createPedido_has_producto!: Sequelize.HasManyCreateAssociationMixin<PedidoHasProducto>
  removePedido_has_producto!: Sequelize.HasManyRemoveAssociationMixin<PedidoHasProducto, PedidoHasProductoId>
  removePedido_has_productos!: Sequelize.HasManyRemoveAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  hasPedido_has_producto!: Sequelize.HasManyHasAssociationMixin<PedidoHasProducto, PedidoHasProductoId>
  hasPedido_has_productos!: Sequelize.HasManyHasAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  countPedido_has_productos!: Sequelize.HasManyCountAssociationsMixin
  // Estadopedido hasMany Pedido via estadoPedidoID
  pedidos!: Pedido[]
  getPedidos!: Sequelize.HasManyGetAssociationsMixin<Pedido>
  setPedidos!: Sequelize.HasManySetAssociationsMixin<Pedido, PedidoId>
  addPedido!: Sequelize.HasManyAddAssociationMixin<Pedido, PedidoId>
  addPedidos!: Sequelize.HasManyAddAssociationsMixin<Pedido, PedidoId>
  createPedido!: Sequelize.HasManyCreateAssociationMixin<Pedido>
  removePedido!: Sequelize.HasManyRemoveAssociationMixin<Pedido, PedidoId>
  removePedidos!: Sequelize.HasManyRemoveAssociationsMixin<Pedido, PedidoId>
  hasPedido!: Sequelize.HasManyHasAssociationMixin<Pedido, PedidoId>
  hasPedidos!: Sequelize.HasManyHasAssociationsMixin<Pedido, PedidoId>
  countPedidos!: Sequelize.HasManyCountAssociationsMixin

  static initModel (sequelize: Sequelize.Sequelize): typeof Estadopedido {
    return Estadopedido.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'estadopedido',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    })
  }
}
